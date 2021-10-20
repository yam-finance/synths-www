<template>
    <div class="sci-wrapper bg-[#3739AA] rounded-xl py-4 px-6 w-full grid gap-x-2.5">
        <div class="sci__selector uppercase font-bold text-xs justify-self-start">weth</div>
        <button
            class="
                sci__max-button
                font-semibold
                text-black text-xs
                rounded
                bg-white
                p-1
                text-center
                justify-self-end
                basic-hover
            "
        >
            Max
        </button>
        <div class="sci__input">
            <input class="w-full text-purpleLight outline-none" type="text" v-model="inputValue" />
        </div>
    </div>
</template>

<script>
export default {
    name: "SynthsInput",
    props: {
        modelValue: {
            type: String,
            default: "0",
        },
    },
    emits: ["update:modelValue"],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit("update:modelValue", val)
            },
        },
    },
}
</script>

<style scoped lang="scss">
.sci {
    &-wrapper {
        box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
            ". ."
            "input input";
    }

    &__input {
        grid-area: input;

        input {
            background: none;
        }
    }
}
</style>
