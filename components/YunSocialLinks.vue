<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const siteConfig = useSiteConfig()
const qqSocial = {
    name: 'QQ 3218178006',
    link: 'https://qm.qq.com/q/XUIML8R5WC&personal_qrcode_source=4',
    icon: 'i-ri-qq-line',
    color: '#12B7F5',
}
const mailSocial = {
    name: 'E-Mail',
    link: 'mailto:dianfang9712@gmail.com',
    icon: 'i-ri-mail-line',
    color: '#8E71C1',
}
</script>
<script lang="ts">
export default {
    methods: {
        copyToClipboard(link: any) {
            const textArea = document.createElement("textarea");
            textArea.value = link;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                const successful = document.execCommand("copy");
                const msg = successful ? link + "\nCopied to clipboard!" : "Copy failed!";
                alert(msg);
            } catch (err) {
                console.error("Copy failed: ", err);
            }
            document.body.removeChild(textArea);
        },
    }
}
</script>

<template>
    <div class="links-of-author">
        <a v-for="item, i in siteConfig.social" :key="i" class="links-of-author-item yun-icon-btn" rel="noopener"
            :href="item.link" :title="item.name" target="_blank" :style="`color:${item.color}`">
            <div class="icon" :class="item.icon" />
        </a>
        <a class="links-of-author-item yun-icon-btn" rel="noopener" :title="qqSocial.name" @click="copyToClipboard('3218178006')"
            :style="`color:${qqSocial.color}`">
            <div class="icon" :class="qqSocial.icon" />
        </a>
        <a class="links-of-author-item yun-icon-btn" rel="noopener" :title="mailSocial.name" @click="copyToClipboard('fxy1020@163.com')"
            :style="`color:${mailSocial.color}`">
            <div class="icon" :class="mailSocial.icon" />
        </a>
    </div>
</template>

<style lang="scss">
.links-of-author {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .icon {
        width: 1.5rem;
        height: 1.5rem;
    }

    &-item {
        line-height: 1;
        font-size: 0.9rem;
    }
}
</style>


