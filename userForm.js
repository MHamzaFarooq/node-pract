function userForm(req, res) {
  return `
    <form action= "/submit">
        <input type="text" name="message" placeholder="Enter your message">
        <button type="submit">Submit</button>
    </form>
`;
}
export default userForm;
