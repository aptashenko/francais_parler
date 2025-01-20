import { ref, computed, onMounted, onUnmounted } from 'vue';

type CountdownTimer = {
  formattedTime: Readonly<import('vue').ComputedRef<string>>;
  start: () => void;
  stop: () => void;
  // eslint-disable-next-line no-unused-vars
  reset: (newMilliseconds?: number) => void;
};

export function useCountdownTimer(initialMilliseconds: number): CountdownTimer {
  const timeLeft = ref<number>(initialMilliseconds);
  const timer = ref<number | null>(null);

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60000);
    const seconds = Math.floor((timeLeft.value % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  });

  const start = (): void => {
    if (timer.value) return; // Не запускаем таймер, если он уже идет

    timer.value = setInterval(() => {
      if (timeLeft.value <= 0) {
        stop();
        return;
      }
      timeLeft.value -= 1000;
    }, 1000);
  };

  const stop = (): void => {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  };

  const reset = (newMilliseconds: number = initialMilliseconds): void => {
    stop();
    timeLeft.value = newMilliseconds;
  };

  onMounted(() => {
    start();
  });

  onUnmounted(() => {
    stop();
  });

  return {
    formattedTime,
    start,
    stop,
    reset,
  };
}
