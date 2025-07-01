#!/bin/bash

# Script de test pour vérifier que les fichiers sont correctement générés
echo "🧪 Testing static pages generation..."

# Vérifier que tous les fichiers HTML existent
if [[ -f "dist/index.html" && -f "dist/cgu.html" && -f "dist/mentions-legales.html" && -f "dist/404.html" ]]; then
    echo "✅ Tous les fichiers HTML sont présents"
else
    echo "❌ Des fichiers HTML sont manquants"
    exit 1
fi

# Vérifier que les fichiers de configuration existent
if [[ -f "dist/_redirects" && -f "dist/vercel.json" && -f "dist/.htaccess" ]]; then
    echo "✅ Tous les fichiers de configuration sont présents"
else
    echo "❌ Des fichiers de configuration sont manquants"
    exit 1
fi

# Vérifier que les assets sont correctement référencés
if grep -q "/assets/index.*\.js" dist/cgu.html && grep -q "/assets/index.*\.css" dist/cgu.html; then
    echo "✅ Les assets sont correctement référencés"
else
    echo "❌ Problème avec les références aux assets"
    exit 1
fi

echo "✅ Tous les tests passent ! Le projet est prêt pour l'hébergement."
