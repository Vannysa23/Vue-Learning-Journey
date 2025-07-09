<script setup>

</script>

<template>
    <header>
        <h1>Vue</h1>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <small>Vue Learning Journey &copy;2025</small>
        <div class="footer-link">
            <a class="media-link" href="https://github.com/Vannysa23">
                <img class="git-profile" src="https://avatars.githubusercontent.com/u/150645093?v=4" alt="Github-Profile">
                <span>NYSA</span>
            </a>
        </div>
        
    </footer>
</template>

<style scoped>
    header, main, footer {
        padding: 1rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto; 
    }

    footer{
        margin: 10px auto;
    }

    footer small {
        display: block;
        text-align: center;
    }   

    footer .footer-link{
        display: flex;
        justify-content: center;
    }

    footer .media-link {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        border-radius: 30px;
        border: 1px solid transparent;
        transition: all linear 0.2s;
    }

    footer .media-link:hover {
        border: 1px solid rosybrown;
        cursor: pointer;
    }

    footer .media-link .git-profile{
        width: 25px;
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        margin-right: 0.8rem;
    }
 
</style>
