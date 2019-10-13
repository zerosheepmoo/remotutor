<template>
    <ParentLayout >
        <ClientOnly>
            <Disqus slot="page-bottom" class="content"/>
        </ClientOnly>
    </ParentLayout>
</template>

<script>
    import ParentLayout from '@parent-theme/layouts/Layout.vue'
    import Disqus from '../components/disqus.vue'
    export default {
        components: {
            ParentLayout,
            Disqus
        }
    }
</script>