export const Toggle = ({ emojiTrue, emojiFalse, section, state, updateState }: Ttoggle) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`hide-checkbox-${emojiTrue}-${section}`}
        checked={state}
        onChange={updateState}
        className="hide-checkbox"
      />
      <label
        htmlFor={`hide-checkbox-${emojiTrue}-${section}`}
        className="toggle"
      >
        <span className="toggle-button"></span>
        <span className="toggle-item">{state ? emojiTrue : emojiFalse}</span>
      </label>
    </div>
  );
};
