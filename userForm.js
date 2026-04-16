function userForm(req, res) {
  res.write(`
    <form action= "/submit">
        <input type="text" name="message" placeholder="Enter your message">
        <button type="submit">Submit</button>
    </form>
    `);
}
module.exports = userForm;
