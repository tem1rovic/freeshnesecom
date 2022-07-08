import React, {FC} from 'react';
import Container from "components/Container/Container";
import Button from "components/UI/Button/Button";
import cl from "components/Sections/styles/Headline.module.scss";

const Blogs: FC = () => {
    return (
        <Container id='blogs' padding='64px'>
            <div className={cl.Head}>
                <h2>Read our Blog posts</h2>
                <Button arrow={true} type='btn-more'>Go to Blog</Button>
            </div>
            <div className={cl.Root}></div>
        </Container>
    );
};

export default Blogs;