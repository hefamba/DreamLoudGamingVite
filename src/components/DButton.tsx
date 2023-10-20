import { Button } from 'react-bootstrap';

type ButtomProp = {
  button: JSX.Element;
};

const DButton = (button: ButtomProp) => {
  return <Button variant="info"></Button>;
};

export default DButton;
