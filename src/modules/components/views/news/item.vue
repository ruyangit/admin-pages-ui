<template>
    <div>
        <div class="news-header">
            <h1>{{item.title}}</h1>
            <p>{{item.source}}</p>
            <p>{{item.ptime}}</p>
        </div>
        <div class="news-body">
            <template v-for="(picItem,p) in item.picInfo">
                <div :key="p">
                    <!-- {{picItem}} -->
                    <img :src="picItem.url"/>
                </div>
            </template>
            <p>{{item.digest}}</p>
        </div>
        <div class="news-footer">
            <p>{{item.tcount}}</p><p>{{item.category}}</p><p>{{item.tag}}</p>
        </div>
        <!-- <p>{{item.liveInfo}}</p>
        <p>{{item.tcount}}</p>
        <p>{{item.picInfo}}</p>
        <p>{{item.docid}}</p>
        <p>{{item.videoInfo}}</p>
        <p>{{item.channel}}</p>
        <p>{{item.link}}</p>
        
        <p>{{item.title}}</p>
        <p>{{item.type}}</p>
        <p>{{item.imgsrcFrom}}</p>
        <p>{{item.imgsrc3gtype}}</p>
        <p>{{item.unlikeReason}}</p>
        <p>{{item.digest}}</p>
        <p>{{item.typeid}}</p>
        <p>{{item.addata}}</p>
        <p>{{item.tag}}</p>
        <p>{{item.category}}</p>
        
        <p>-------------------------------------------------------------</p> -->

    </div>
</template>

<script>
export default {
  name: "news-item",
  props: ["item"]
};
</script>

<style scoped>
</style>