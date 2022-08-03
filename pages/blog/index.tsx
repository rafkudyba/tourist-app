import { FC } from "react";

// Templates
import TemplatePage from "@/components/templates/Layout.template";
import TemplateBlog from '@/templates/blog/TemplateBlog.component';

const BlogPage: FC = () => {
    return (
        <TemplatePage page={"Blog"}>
            <TemplateBlog />
        </TemplatePage>
    );
}

export default BlogPage;