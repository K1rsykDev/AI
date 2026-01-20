import { create } from "zustand";

export type AppearanceMode = "dark" | "light" | "system";

type AppState = {
  username: string;
  hasOnboarded: boolean;
  appearance: AppearanceMode;
  credits: number;
  setUsername: (name: string) => void;
  setOnboarded: (value: boolean) => void;
  setAppearance: (mode: AppearanceMode) => void;
  spendCredit: () => void;
  addCredits: (amount: number) => void;
};

const storedName = localStorage.getItem("ai-studio-username") ?? "";
const storedOnboarded = localStorage.getItem("ai-studio-onboarded") === "true";
const storedAppearance = (localStorage.getItem("ai-studio-appearance") as AppearanceMode) ?? "dark";
const storedCredits = Number(localStorage.getItem("ai-studio-credits") ?? 5);

export const useAppStore = create<AppState>((set) => ({
  username: storedName,
  hasOnboarded: storedOnboarded,
  appearance: storedAppearance,
  credits: Number.isNaN(storedCredits) ? 5 : storedCredits,
  setUsername: (name) => {
    localStorage.setItem("ai-studio-username", name);
    set({ username: name });
  },
  setOnboarded: (value) => {
    localStorage.setItem("ai-studio-onboarded", String(value));
    set({ hasOnboarded: value });
  },
  setAppearance: (mode) => {
    localStorage.setItem("ai-studio-appearance", mode);
    set({ appearance: mode });
  },
  spendCredit: () =>
    set((state) => {
      const next = Math.max(0, state.credits - 1);
      localStorage.setItem("ai-studio-credits", String(next));
      return { credits: next };
    }),
  addCredits: (amount) =>
    set((state) => {
      const next = state.credits + amount;
      localStorage.setItem("ai-studio-credits", String(next));
      return { credits: next };
    }),
}));
