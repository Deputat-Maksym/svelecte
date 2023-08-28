<script>
  import Svelecte from '$lib/Svelecte.svelte';
  
  let options = [
    {
      "value": "ukr",
      "label": "Украинский"
    },
    {
      "value": "rus",
      "label": "Русский"
    },
    {
      "value": "bel",
      "label": "Белорусский"
    },
    {
      "value": "kaz",
      "label": "Казахский"
    },
    {
      "value": "ita",
      "label": "Итальянский"
    },
    {
      "value": "deu",
      "label": "Немецкий"
    },
    {
      "value": "ron",
      "label": "Румынский"
    },
    {
      "value": "spa",
      "label": "Испанский"
    },
    {
      "value": "ces",
      "label": "Чешский"
    },
    {
      "value": "bul",
      "label": "Болгарский"
    },
    {
      "value": "swe",
      "label": "Шведский"
    },
    {
      "value": "nld",
      "label": "Нидерландский"
    },
    {
      "value": "fra",
      "label": "Французский"
    },
    {
      "value": "lit",
      "label": "Литовский"
    },
    {
      "value": "eng",
      "label": "Английский"
    },
    {
      "value": "lav",
      "label": "Латышский"
    },
    {
      "value": "est",
      "label": "Эстонский"
    },
    {
      "value": "ell",
      "label": "Греческий"
    },
    {
      "value": "por",
      "label": "Португальский"
    },
    {
      "value": "hun",
      "label": "Венгерский"
    },
    {
      "value": "tur",
      "label": "Турецкий"
    },
    {
      "value": "hrv",
      "label": "Хорватский"
    },
    {
      "value": "slv",
      "label": "Словенский"
    },
    {
      "value": "slk",
      "label": "Словацкий"
    },
    {
      "value": "gle",
      "label": "Ирландский"
    },
    {
      "value": "fin",
      "label": "Финский"
    },
    {
      "value": "pol",
      "label": "Польский"
    },
    {
      "value": "scc",
      "label": "Сербский"
    }
  ];
  let langsSelected = [];
</script>

<div class="container py-5">
  <div class="col-3">
    <Svelecte {options}
              labelAsValue={false}
              isInvalid={false}
              bind:value={langsSelected}
              multiple
              highlightFirstItem={false}
              placeholder="Мови" />
  </div>
  
</div>

