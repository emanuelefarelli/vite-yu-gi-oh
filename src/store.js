import { reactive } from "vue";

const store = reactive({
    count : 0,
    loadingState : true,
});

export {store};