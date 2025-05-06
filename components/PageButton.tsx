import { Button } from "react-native";

type PageButtonProps = {
    text: string;
    color: string;
    onPress: () => void;
};

const PageButton = ({ text, color, onPress }: PageButtonProps) => {
    return <Button title={text} color={color} onPress={onPress} />;
};

export default PageButton;
