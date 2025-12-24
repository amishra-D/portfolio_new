import {
  FaChessPawn,
  FaChessKnight,
  FaChessQueen,
  FaChessKing,
  FaExclamationTriangle,
  FaFlagCheckered,
} from "react-icons/fa";

export const CHESS_EASTER_EGGS = {
  e2e4: {
    text: "Good opening.",
    icon: FaChessPawn,
  },
  d2d4: {
    text: "Solid choice.",
    icon: FaChessPawn,
  },
  c2c4: {
    text: "English Opening.",
    icon: FaChessPawn,
  },
  g1f3: {
    text: "Developing early — nice.",
    icon: FaChessKnight,
  },
  b1c3: {
    text: "Flexible development.",
    icon: FaChessKnight,
  },

  oo: {
    text: "King safety first.",
    icon: FaChessKing,
  },
  ooo: {
    text: "Long castle — bold.",
    icon: FaChessKing,
  },

  a2a3: {
    text: "Waiting move.",
    icon: FaChessPawn,
  },
  h2h3: {
    text: "Quiet preparation.",
    icon: FaChessPawn,
  },
  a2a4: {
    text: "Aggressive flank idea.",
    icon: FaChessPawn,
  },
  h2h4: {
    text: "Creative… maybe.",
    icon: FaExclamationTriangle,
  },

  f2f3: {
    text: "Interesting choice…",
    icon: FaExclamationTriangle,
  },
  g2g4: {
    text: "Bold. Very bold.",
    icon: FaExclamationTriangle,
  },

  qxf7: {
    text: "Aggressive tactics detected.",
    icon: FaChessQueen,
  },
  b5c6: {
    text: "Structural damage inflicted.",
    icon: FaChessQueen,
  },

  resign: {
    text: "Never resign too early.",
    icon: FaFlagCheckered,
  },
  draw: {
    text: "Equal position.",
    icon: FaFlagCheckered,
  },
  zugzwang: {
    text: "No good moves left.",
    icon: FaExclamationTriangle,
  },
};
