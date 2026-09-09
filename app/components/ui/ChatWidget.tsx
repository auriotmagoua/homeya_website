"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  MessageSquareText,
  SendHorizontal,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ============================================================
  // MESSAGE INITIAL
  // ============================================================

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        text: "Bonjour ! Comment puis-je vous aider aujourd'hui ? 👋",
        sender: "bot",
        timestamp: "Maintenant",
      },
    ]);
  }, []);

  // ============================================================
  // SCROLL AUTOMATIQUE
  // ============================================================

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages, isOpen]);

  // ============================================================
  // FOCUS INPUT
  // ============================================================

  useEffect(() => {
    if (isOpen) {
      // Petit délai pour être sûr que le composant est rendu
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // ============================================================
  // OUVRIR
  // ============================================================

  const handleOpenChat = () => {
    console.log("CHAT OUVERT");

    setIsOpen(true);
    setShowBadge(false);
  };

  // ============================================================
  // FERMER
  // ============================================================

  const handleCloseChat = () => {
    console.log("CHAT FERMÉ");

    setIsOpen(false);
  };

  // ============================================================
  // ENVOYER MESSAGE
  // ============================================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = inputValue.trim();

    if (!text) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: "user",
      timestamp: "Maintenant",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Réponse automatique de démonstration
    setTimeout(() => {
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "Ceci est une réponse automatique de démonstration. Intégrez votre propre API pour rendre le chat réellement fonctionnel.",
        sender: "bot",
        timestamp: "Maintenant",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        sm:bottom-6
        sm:right-6
        z-[99999]
        flex
        flex-col
        items-end
        font-sans
      "
    >
      {/* ========================================================
          FENÊTRE DU CHAT
      ======================================================== */}

      {isOpen && (
        <div
          className="
            mb-4
            flex
            h-[500px]
            w-[calc(100vw-40px)]
            max-w-[384px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-2xl
          "
        >
          {/* ====================================================
              HEADER
          ==================================================== */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              p-4
              text-white
            "
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                  "
                >
                  <Bot className="h-6 w-6" />
                </div>

                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-white
                    bg-green-400
                  "
                />
              </div>

              {/* Informations */}
              <div>
                <h3 className="text-sm font-semibold leading-tight">
                  Assistant Virtuel
                </h3>

                <p className="flex items-center gap-1 text-xs text-blue-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  En ligne
                </p>
              </div>
            </div>

            {/* Bouton fermer */}
            <button
              type="button"
              onClick={handleCloseChat}
              className="
                relative
                z-10
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                text-white
                transition-colors
                hover:bg-white/10
              "
              aria-label="Fermer le chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* ====================================================
              ZONE DES MESSAGES
          ==================================================== */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              bg-slate-50
              p-4
            "
          >
            <div className="space-y-4">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {/* Avatar du bot */}
                    {!isUser && (
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-100
                          text-blue-600
                        "
                      >
                        <Bot className="h-4 w-4" />
                      </div>
                    )}

                    {/* Message */}
                    <div
                      className={`
                        max-w-[80%]
                        rounded-2xl
                        p-3
                        shadow-sm
                        ${
                          isUser
                            ? "rounded-tr-none bg-blue-600 text-white"
                            : "rounded-tl-none border border-slate-100 bg-white text-slate-800"
                        }
                      `}
                    >
                      <p className="break-words text-sm leading-relaxed">
                        {msg.text}
                      </p>

                      <span
                        className={`
                          mt-1
                          block
                          text-right
                          text-[10px]
                          ${
                            isUser
                              ? "text-blue-200"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* ====================================================
              FORMULAIRE
          ==================================================== */}

          <div
            className="
              shrink-0
              border-t
              border-slate-200
              bg-white
              p-3
            "
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full items-center gap-2"
            >
              {/* INPUT */}

              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Écrivez votre message..."
                className="
                  block
                  h-11
                  min-w-0
                  flex-1
                  appearance-none
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-100
                  px-4
                  text-sm
                  text-slate-800
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-2
                  focus:ring-blue-500/20
                "
                autoComplete="off"
              />

              {/* BOUTON ENVOYER */}

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-blue-700
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Envoyer le message"
              >
                <SendHorizontal className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          BOUTON FLOTTANT
      ======================================================== */}

      {!isOpen && (
        <button
          type="button"
          onClick={handleOpenChat}
          className="
            relative
            z-[100000]
            flex
            h-14
            w-14
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            shadow-xl
            transition-all
            duration-200
            hover:scale-110
            active:scale-95
            focus:outline-none
            focus:ring-4
            focus:ring-blue-500/30
          "
          aria-label="Ouvrir le chat"
        >
          {/* Badge */}
          {showBadge && (
            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-rose-500
                text-[9px]
                font-bold
                text-white
              "
            >
              1
            </span>
          )}

          <MessageSquareText className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}