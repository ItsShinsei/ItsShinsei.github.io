import streamlit as st
import os

st.set_page_config(
    page_title="Mushadiq Novarahman — Portfolio",
    page_icon="🌐",
    layout="wide",
)

# Remove Streamlit default padding and toolbar
st.markdown("""
    <style>
        #MainMenu, header, footer { visibility: hidden; }
        .block-container { padding: 0 !important; }
    </style>
""", unsafe_allow_html=True)

# Read and inline CSS & JS into the HTML
base_dir = os.path.dirname(__file__)

with open(os.path.join(base_dir, "style.css"), "r", encoding="utf-8") as f:
    css = f.read()

with open(os.path.join(base_dir, "main.js"), "r", encoding="utf-8") as f:
    js = f.read()

with open(os.path.join(base_dir, "index.html"), "r", encoding="utf-8") as f:
    html = f.read()

# Replace external link references with inline content
html = html.replace(
    '<link rel="stylesheet" href="style.css" />',
    f'<style>{css}</style>'
)
html = html.replace(
    '<script src="main.js"></script>',
    f'<script>{js}</script>'
)

# Render the portfolio
st.components.v1.html(html, height=6500, scrolling=True)
