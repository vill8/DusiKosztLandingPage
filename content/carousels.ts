export type HeroScreenshotSlide = {
  id: string
  imageSrc: string | null
  label: string
}

export type FeatureCarouselCard = {
  id: string
  header: string
  subHeader: string
  text: string
}

export const heroScreenshotSlides: HeroScreenshotSlide[] = [
  { id: '01', imageSrc: '/dusikoszt-app-screenshot.png', label: 'Ekran aplikacji 1' },
  { id: '02', imageSrc: '/dusikoszt-app-screenshot-2.png', label: 'Ekran aplikacji 2' },
  { id: '03', imageSrc: '/dusikoszt-app-screenshot-3.png', label: 'Ekran aplikacji 3' },
  { id: '04', imageSrc: '/dusikoszt-app-screenshot-4.png', label: 'Ekran aplikacji 4' },
  { id: '05', imageSrc: '/dusikoszt-app-screenshot-5.png', label: 'Ekran aplikacji 5' },
]

export const featureCarouselContent = {
  title: 'Najważniejsze funkcje',
  subTitle: '',
  cards: [
    {
      id: 'feature-1',
      header: 'Podlicz swoje wydatki!',
      subHeader: 'Dodawaj i odejmuj usługi',
      text: 'Wybierz spośród najpopularniejszych usług lub dodawaj własne niestandardowe.',
    },
    {
      id: 'feature-2',
      header: 'Kubki kawy',
      subHeader: 'Zobrazuj sobie swoje wydatki!',
      text: 'Płacąc co miesiąc nie wiesz ile tak na prawdę wydajesz. Zobacz ile kubków kawy możesz za to wypić!',
    },
    {
      id: 'feature-3',
      header: 'Dusiciel Darmówek',
      subHeader: 'Uduś okresy próbne w zarodku',
      text: 'Otrzymuj powiadomienia przed upłynięciem twoich okresów próbnych i oszukaj system ;)',
    },
    {
      id: 'feature-4',
      header: 'Analityka',
      subHeader: 'Budżet i analiza',
      text: 'Ustaw swój budżet na przyjemności a potem sprawdź analizę swoich wydatków. Okiełznaj swoje wydatki ;).',
    },
  ] satisfies FeatureCarouselCard[],
}
