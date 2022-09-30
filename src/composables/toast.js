import { ref, onUnmounted } from "vue";
export const useToast = () => {
  const showToast = ref(false);
  const toastMessage = ref("");
  const toastType = ref("");
  const toastTimer = ref(null);

  const triggerToast = (message, color = "success") => {
    toastMessage.value = message;
    toastType.value = color;
    showToast.value = true;
    toastTimer.value = setTimeout(() => {
      toastMessage.value = "";
      toastType.value = "";
      showToast.value = false;
      console.log("안내창제거됨");
    }, 3000);
  };
  onUnmounted(() => {
    clearTimeout(toastTimer.value);
  });
  return {
    toastMessage,
    showToast,
    toastType,
    triggerToast,
  };
};
