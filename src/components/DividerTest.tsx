import { Divider, Typography } from "antd";

const { Paragraph } = Typography;

const DividerTest = () => {
    return (
        <>
            <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima culpa cupiditate nam eum sit voluptatibus sequi? Fuga sed fugiat atque quis perspiciatis fugit ullam, consequatur corporis explicabo beatae porro! Tenetur.</Paragraph>
            <Divider children={<p>Some text inside</p>} />
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo nam aspernatur, architecto autem nihil nostrum amet accusantium quis labore consectetur accusamus et, perferendis odit. Non cum impedit molestiae dicta.</Paragraph>
            <Divider orientation="left" variant="solid">Some text inside</Divider>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo nam aspernatur, architecto autem nihil nostrum amet accusantium quis labore consectetur accusamus et, perferendis odit. Non cum impedit molestiae dicta.</Paragraph>
        </>
    );
};

export default DividerTest;