package dev.paragraph.eight.blog_admin_service.dto;



import lombok.Data;
import java.util.List;

@Data
public class GeneratedBlogResponse {

    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getExcerpt() {
        return excerpt;
    }

    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }

    public String getContentHtml() {
        return contentHtml;
    }

    public void setContentHtml(String contentHtml) {
        this.contentHtml = contentHtml;
    }

    public int getReadTime() {
        return readTime;
    }

    public void setReadTime(int readTime) {
        this.readTime = readTime;
    }

    public String getLinkedinSummary() {
        return linkedinSummary;
    }

    public void setLinkedinSummary(String linkedinSummary) {
        this.linkedinSummary = linkedinSummary;
    }

    public List<String> getHashtags() {
        return hashtags;
    }

    public void setHashtags(List<String> hashtags) {
        this.hashtags = hashtags;
    }

    private String slug;
    private String excerpt;
    private String contentHtml;
    private int readTime;

    private String linkedinSummary;
    private List<String> hashtags;
}
