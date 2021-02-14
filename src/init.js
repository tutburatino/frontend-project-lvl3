const body = `  <body class="d-flex flex-column min-vh-100">
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5><button type="button" class="close" data-dismiss="modal"
                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"><a class="btn btn-primary full-article" href="#" role="button" target="_blank"
                    rel="noopener noreferrer">Full article</a> <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">Close</button></div>
        </div>
    </div>
</div>
<main class="flex-grow-1">
    <section class="container-fluid bg-dark p-5">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto text-white">
                <h1 class="display-3">RSS Reader</h1>
                <p class="lead">Start reading RSS today! It is easy, it is nicely.</p>
                <form action="" class="rss-form">
                    <div class="form-row">
                        <div class="col"><input autofocus required name="url" aria-label="url"
                                class="form-control form-control-lg w-100" placeholder="RSS link"></div>
                        <div class="col-auto"><button type="submit" aria-label="add"
                                class="btn btn-lg btn-primary px-sm-5">Add</button></div>
                    </div>
                </form>
                <p class="text-muted my-1">Example: https://ru.hexlet.io/lessons.rss</p>
                <div class="feedback"></div>
            </div>
        </div>
    </section>
    <section class="container-fluid p-5">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto feeds"></div>
        </div>
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto posts"></div>
        </div>
    </section>
</main>
<footer class="footer border-top py-3 mt-5">
    <div class="container-xl">
        <div class="text-center">created by <a href="https://t.me/freshfree"
                target="_blank">Mikhail Proskuryakov</a></div>
    </div>
</footer>
</body>`;

export default () => {
  document.title = 'RSS reader';
  document.body.outerHTML = body;
};
