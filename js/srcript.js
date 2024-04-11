$(document).ready(function () {
  var news = $("#news");
  var items = [
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
    {
      image: `exemple.jpg`,
      title: `Я отменил физ-ру и из-за этого физрук излечился от травмы 1990 года`,
      type: `Новости РФ`,
      link: `#`,
    },
  ];

  function getNewsTemplate(el) {
    return `
      <div class="new-item">
        <img src="../assets/${el.image}" alt="изображение для новости" class="new-image">
        <a href="${el.link}" class="new-title">${el.title}</a>
        <div class="sup-new-block">
          <a href="#" class="new-type">${el.type}</a>
          <a href="${el.link}" class="new-view">Читать</a>
        </div>
      </div>
    `;
  }

  $.each(items, function (index, item) {
    news.prepend(getNewsTemplate(item));
  });
});
