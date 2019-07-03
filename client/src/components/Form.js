import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  display: block;
`;

const FormGroup = styled.div`
  position: relative;
  display: block;
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 15px;
  font-weight: 600;
`;

Form.Group = FormGroup;
Form.Label = FormLabel;

export default Form;
