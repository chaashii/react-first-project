import { Button, Form, FormInstance } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";

// interface SubmitButtonProps {
//     form: FormInstance;
// }

type SubmitButtonProps = {
    form: FormInstance;
}

const SubmitButton = ({form, children}: PropsWithChildren<SubmitButtonProps>) => {
    const [submittable, setSubmittable] = useState<boolean>(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
    
    useEffect(() => {
        form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);
    
    const onClickSubmit = () => {
        console.info(`sumbit form: ${JSON.stringify(values)}}`)
    }
    return (
          <Button type="primary" htmlType="submit" disabled={!submittable} onClick={onClickSubmit}>
            {children}
          </Button>
    );
}

export default SubmitButton

// const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
//     const [submittable, setSubmittable] = useState<boolean>(false);
  
//     // Watch all values
//     const values = Form.useWatch([], form);
  
//     useEffect(() => {
//       form
//         .validateFields({ validateOnly: true })
//         .then(() => setSubmittable(true))
//         .catch(() => setSubmittable(false));
//     }, [form, values]);
  
    // return (
    //   <Button type="primary" htmlType="submit" disabled={!submittable}>
    //     {children}
    //   </Button>
    // );
//   };
