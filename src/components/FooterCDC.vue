<template>
    <v-footer app color="#a4bbd3" class="footer">
        <v-container class="py-2">
            <div class="footer-content d-flex justify-center align-center flex-wrap">
                <span class="footer-text">
                    &copy; 2024 Centelhas do Cristo — Desenvolvido por alunas da
                    <a href="https://unifacisa.edu.br/" target="_blank" rel="noopener" class="facisa-link">
                        UNIFACISA
                    </a>
                </span>
            </div>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterCDC'
}
</script>

<style scoped>
.footer {
    background-color: #a4bbd3 !important;
    border-top: 1px solid #fdf2e8;
    box-shadow: 0 -1px 4px rgba(122, 79, 30, 0.05);
    padding: 4px 0;
    font-size: 0.85rem;
}

.footer-text {
    font-family: "Playwrite RO", cursive;
    color: #7a4f1e;
    text-align: center;
    line-height: 1.4;
}

.facisa-link {
    color: #7a4f1e;
    font-weight: 500;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.facisa-link:hover {
    color: #5d3e18;
}

.footer-content {
    width: 100%;
    text-align: center;
}
</style>
