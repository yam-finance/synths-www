module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "prettier",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    ignorePatterns: ["/node_modules/**/*.*"],
    rules: {
        "vue/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
        "vue/script-setup-uses-vars": "error",
        "no-console": "off",
    },
    globals: {
        $ref: "readonly",
        defineProps: "readonly",
        defineEmits: "readonly",
    },
}
