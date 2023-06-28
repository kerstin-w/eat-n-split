import { useState } from "react";
import { Button } from "./Button";

/**
 * Form for adding a new friend
 *
 * @param {Object} props Component props
 * @param {Function} props.onAddFriend Called when form is submitted
 */
export function FormAddfriend({ onAddFriend }) {
  /** State for form input values */
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handle form submission
   * @param {Event} e Form submit event
   */
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    // Generate ID and create new friend object
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // Call callback to add new friend
    onAddFriend(newFriend);

    // Reset form state  to initial values
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🏞️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
