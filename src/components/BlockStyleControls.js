import React from 'react';

import StyleButton from './StyleButton';

export default function BlockStyleControls(props) {
  const {editorState, blockTypes} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <span className="RichEditor-controls">
      {blockTypes.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </span>
  );
}
