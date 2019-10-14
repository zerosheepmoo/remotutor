<template>
    <ParentLayout >
        <ClientOnly>
            <Disqus slot="page-bottom" class="content"/>
        </ClientOnly>
    </ParentLayout>
</template>

<script>
    import ParentLayout from '@parent-theme/layouts/Layout.vue'
    // import Disqus from '../components/Disqus.vue'
    // import hh from '../components/hh.vue'
    export default {
        components: {
            ParentLayout,
        }
    }
</script>