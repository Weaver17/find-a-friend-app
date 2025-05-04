import { Button } from "react-native";

type PageButtonProps = {
    text: string;
    color: string;
};

const PageButton = ({ text, color }: PageButtonProps) => {
    return <Button title={text} color={color} />;
};

export default PageButton;
