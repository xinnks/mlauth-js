<script setup>
import { ref } from 'vue';

let newText = ref()
const props = defineProps({
    user: {
        type: Object,
        default: {
            name: "James Sinkala",
            username: "xinnks",
            email: "xinnks@gmail.com"
        }
    }
})
const messages = ref([
    {
        text: "Here is the first text",
        user: {
            username: "xinnks"
        }
    },
    {
        text: "Hello first message",
        user: {
            username: "someone"
        }
    }
]);

function sendMessage(){
    messages.value.push({
        text: newText.value,
        user: props.user
    })

    newText.value = ""
}
</script>

<template>
    <div class="flex flex-col h-[100vh]">
        <h2 class="text-center p-4">This is the chat component</h2>
        <div class="flex-1 flex flex-col justify-end w-full border-2 border-gray-200 bg-slate-300 p-4">
            <div class="overflow-y-auto overflow-x-hidden">
                <div
                    v-for="(message, key) of messages" 
                    :key="key"
                    class="my-4 flex w-full"
                    :class="{
                        'pl-12 text-right': message.user.username === props.user.username,
                        'flex-row-reverse pr-12': message.user.username !== props.user.username
                    }"
                >
                    <div class="flex-1"></div>
                    <div
                        :class="{
                            'p-2 text-white rounded-lg flex flex-col space-y-2': true,
                            'bg-blue-700': message.user.username === props.user.username,
                            'bg-gray-800': message.user.username !== props.user.usename
                        }"
                    >
                        <div>
                            <small>@{{ message.user.username }}</small>
                        </div>
                        <p class="text-left">
                            {{  message.text }}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <form 
                    @submit.prevent="sendMessage()"
                    class="flex"
                >
                    <textarea
                        v-model="newText"
                        type="text"
                        class="w-full flex flex-1 p-4 border border-blue-200 rounded resize-none"
                        rows="2"
                        @keyup.enter="sendMessage()"
                    ></textarea>
                    <div class="flex flex-col justify-center py-3 pl-3">
                        <button
                            @click.prevent="sendMessage()"
                            class="p-2 bg-violet-600 text-white rounded"
                        >Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>