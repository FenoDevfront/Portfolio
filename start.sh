#!/bin/bash

echo "======================================="
echo "   Portfolio - Fenoniaina RATSIMBAHARISOA"
echo "======================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

cd "$(dirname "$0")"

# Backend
echo -e "${BLUE}Configuration du backend Python...${NC}"
cd backend

if [ ! -d "venv" ]; then
    echo "Création de l'environnement virtuel..."
    python -m venv venv
fi

source venv/bin/activate
pip install -r requirements.txt --quiet

echo -e "${BLUE}Démarrage du backend Flask (port 5000)...${NC}"
python app.py &
BACKEND_PID=$!

# Frontend
echo -e "${BLUE}Démarrage du frontend React (port 3000)...${NC}"
cd ../frontend
npm run dev &
FRONTEND_PID=$!

sleep 3
echo ""
echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}   Portfolio lancé avec succès !${NC}"
echo -e "${GREEN}=======================================${NC}"
echo ""
echo -e "Frontend: ${BLUE}http://localhost:3000${NC}"
echo -e "Backend API: ${BLUE}http://localhost:5000/api/portfolio${NC}"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter les serveurs"

# Cleanup on exit
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT

# Attendre les processus
wait $BACKEND_PID $FRONTEND_PID
