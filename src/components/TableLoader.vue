<template>
    <tr v-if="loading && target == 'desktop'" class="border-b bg-main cursor-pointer basic-hover">
        <td class="pl-4 py-2 font-semibold flex">
            <div class="rounded-full animate-pulse bg-white w-6 h-6" />
            <div class="animate-pulse bg-white ml-2 w-full">.</div>
        </td>
        <td><div class="animate-pulse bg-white">.</div></td>
        <!-- <td><div class="animate-pulse bg-white">.</div></td> -->
        <td><div class="animate-pulse bg-white">.</div></td>
        <td><div class="animate-pulse bg-white">.</div></td>
        <td>
            <div class="animate-pulse bg-white">
                <span class="text-white">.</span>
            </div>
        </td>
        <td class="pr-2 m-0">
            <div class="rounded-full animate-pulse bg-white w-6 h-6" />
        </td>
    </tr>

    <tr v-if="loading && target == 'mobile'" class="border-b bg-main basic-hover">
        <td class="pl-4 py-2 font-semibold flex">
            <div class="rounded-full animate-pulse bg-white w-6 h-6" />
            <div class="animate-pulse bg-white ml-2 w-full">.</div>
        </td>
        <td><div class="animate-pulse bg-white">.</div></td>
        <td><div class="animate-pulse bg-white">.</div></td>
        <td>
            <div class="animate-pulse bg-white">
                <span class="text-white">.</span>
            </div>
        </td>
        <td>
            <div class="rounded-full animate-pulse bg-white w-6 h-6" />
        </td>
    </tr>


</template>

<script>
export default {
    name: "TableLoader",
    props: {
        target: {
            type: String,
            default: "desktop",
        },
        loading: {
            type: Boolean,
            default: true,
        },
    },
}
</script>