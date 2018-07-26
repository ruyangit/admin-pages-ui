<template>
    <div>
        <div class="news-header">
            <h1>{{item.bookname}}</h1>
            <p>{{item.author}}</p>
            <p>{{item.author_name}}</p>
            
            <p>{{item.date_updated}}</p>
        </div>
        <div class="news-body">
                    <img :src="item.book_cover"/>
            <p>{{item.introduction}}</p>
            <!-- <p>{{item.book_info}}</p> -->
            <p>{{item.top_class}}</p>
            <p>{{item.state}}</p>
            <p>{{item.readCount}}</p>
            <p>{{item.praiseCount}}</p>
            <p>{{item.stat_name}}</p>
            <p>{{item.class_name}}</p>
            <p>{{item.size}}</p>
            <p>{{item.chapterid_first}}</p>
            <p>{{item.chargeMode}}</p>
            <p>{{item.digest}}</p>
            <p>{{item.price}}</p>
            <p>{{item.tag}}</p>
            <p>{{item.is_new}}</p>
            <p>{{item.discountNum}}</p>
            <p>{{item.quick_price}}</p>
            <p>{{item.formats}}</p>
            <p>{{item.audiobook_playCount}}</p>
            <p>{{item.chapterNum}}</p>
            <p>{{item.isShortStory}}</p>
            <p>{{item.userid}}</p>
            <p>{{item.search_heat}}</p>
            <p>{{item.num_click}}</p>
            <p>{{item.recommend_num}}</p>
            <p>{{item.first_cate_id}}</p>
            <p>{{item.first_cate_name}}</p>
            <p>{{item.reason}}</p>
        </div>
        <div class="news-footer">
            <p>{{item.chapterid}}</p><p>{{item.topic}}</p><p>{{item.topic_first}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "novel-item",
  props: ["item"]
};
</script>

<style scoped>
</style>