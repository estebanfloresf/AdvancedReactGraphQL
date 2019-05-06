import Reset from "../components/Reset";
const ResetPasswordPage = props => (
  <div>
    <p>Reset your Password</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPasswordPage;
