import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter Something", "danger");
    } else {
      githubContext.searchUser(text);
      setText("");
    }
  };

  const OnChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          onChange={OnChange}
          name='text'
          placeholder='Search for Github Profiles here'
          value={text}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {githubContext.users.length > 0 && (
          <button
            onClick={githubContext.clearUsers}
            className='btn btn-danger btn-block'
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
