function TweetForm() {
  const newTweet = "What are you humming about?"
  const stopEvent = (event) => {
    event.preventDefault();
  }
  
  return (
    <section className="newtweet">
    <form onSubmit={stopEvent} method="post" action="/tweets" className="newtweet__form">
      <textarea className="form__textarea" name="text" placeholder={newTweet}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>
  );
}


export default TweetForm;