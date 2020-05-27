 <template>
  <footer class="footer">
    <div class="footer__container">
      <h2 class="footer__copyright">
        By
        <a href="http://www.emersonleite.dev">Emerson Leite</a>
        - {{year}}
      </h2>
      <p class="footer__social">
        <a href="https://www.linkedin.com/in/emersonleite-dev/">in</a>
      </p>
    </div>
  </footer>
</template>
 
 <script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
 
 <style>
</style>