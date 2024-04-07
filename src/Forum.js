import React, { useState } from 'react';
import Header from './Header';
const Forum = () => {
  // État local pour le contenu des threads et des réponses
  const [threads, setThreads] = useState([]);
  const [newThreadText, setNewThreadText] = useState('');
  const [newReplyText, setNewReplyText] = useState('');

  // Fonction pour soumettre un nouveau thread
  const submitNewThread = () => {
    if (newThreadText.trim() !== '') {
      const newThread = {
        id: threads.length + 1, // Générer un ID unique
        text: newThreadText,
        replies: [],
      };
      setThreads([...threads, newThread]);
      setNewThreadText('');
    }
  };

  // Fonction pour soumettre une nouvelle réponse à un thread
  const submitReply = (threadId) => {
    if (newReplyText.trim() !== '') {
      const updatedThreads = threads.map(thread => {
        if (thread.id === threadId) {
          return {
            ...thread,
            replies: [...thread.replies, { text: newReplyText }],
          };
        }
        return thread;
      });
      setThreads(updatedThreads);
      setNewReplyText('');
    }
  };

  return (
    <div>
      <h2>Forum</h2>
      {/* Afficher les threads existants */}
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            <div>{thread.text}</div>
            {/* Afficher les réponses à ce thread */}
            <ul>
              {thread.replies.map((reply, index) => (
                <li key={index}>{reply.text}</li>
              ))}
            </ul>
            {/* Formulaire pour ajouter une réponse */}
            <input
              type="text"
              value={newReplyText}
              onChange={(e) => setNewReplyText(e.target.value)}
            />
            <button onClick={() => submitReply(thread.id)}>Répondre</button>
          </li>
        ))}
      </ul>
      {/* Formulaire pour ajouter un nouveau thread */}
      <input
        type="text"
        value={newThreadText}
        onChange={(e) => setNewThreadText(e.target.value)}
      />
      <button onClick={submitNewThread}>Nouveau Thread</button>
    </div>
  );
};

export default Forum;
