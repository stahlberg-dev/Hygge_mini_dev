<?php

return [
    'leadName' => 'Лэндинг hygge mini',
    'shopHost' => 'https://zagotovshik.ru',
    'project' => 'hyggelig-mini',
    'token' => 'BfugqEs1Ui4MWGuHaWpFivN7hCvMmT',
    'chat' => -719886644, // Hyggelig Заказы

    'markingHost' => 'https://work.zagk.ru',

    // комплекты (для каждого кода можно указать несколько позиций в заказе)
    // формат: [landingCode => [shopSlug => quantity]]
    'items' => [
        'hygge' => [
            'hyggelig-mini' => 1
        ],
        'hygge-truba-dymohoda'      => ['hygge-truba-dymohoda' => 1],
        'hygge-ugol-dymohoda'       => ['hygge-ugol-dymohoda' => 1],
        'hygge-zontik-dymohoda'     => ['hygge-zontik-dymohoda' => 1],
    ],
];
