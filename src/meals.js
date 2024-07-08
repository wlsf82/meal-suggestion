// eslint-disable-next-line no-unused-vars
const meals = [
  {
    name: 'Feijoada',
    ingredients: ['feijão vermelho', 'abobrinha', 'cenoura', 'cebola', 'alho', 'couve', 'laranja'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Escondidinho',
    ingredients: ['batata ou aipim', 'picado carnal (ou proteína de soja)', 'molho de tomate', 'cebola', 'alho'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Queijadilla',
    ingredients: ['tortilla', 'tofu mexido', 'feijão', 'milho', 'levedura nutricional', 'mix de folhas', 'tomate'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Arroz exótico',
    ingredients: ['arroz', 'tofu', 'brócolis', 'ervilha', 'cenoura'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'À la minuta',
    ingredients: ['batata frita', 'arroz', 'proteína', 'feijão'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Almondegas com arroz',
    ingredients: ['almondegas', 'molho de tomate', 'arroz',],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Lasanha de berinjela',
    ingredients: ['berinjela', 'molho de tomate', 'molho branco', 'queijo vegano', 'massa de lasanha'],
    type: 'hot'
  },
  {
    name: 'Espaguete de abobrinha',
    ingredients: ['abobrinha', 'tomate', 'manjericão', 'azeite', 'massa de espaguete'],
    type: 'hot'
  },
  {
    name: 'Massa à bolonhesa',
    ingredients: ['lentilha', 'azeite', 'massa de espaguete', 'molho de tomate', 'cebola', 'alho'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Panqueca à bolonhesa',
    ingredients: ['azeite', 'farinha de trigo', 'cenoura/beterraba/espinafre', 'leite vegetal', 'chia', 'cebola', 'alho', 'molho de tomate', 'picado carnal'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Chilly',
    ingredients: ['picado carnal', 'feijão vermelho', 'molho de tomate', 'pimenta', 'milho', 'abacate', 'cebola', 'tomate', 'alho', 'pimentão', 'nachos'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Carreteiro',
    ingredients: ['proteína', 'arroz', 'cebola', 'alho', 'molho de tomate', 'tempero verde'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Nhoque',
    ingredients: ['massa de nhoque', 'cebola', 'alho', 'molho vermelho', 'pimenta do reino'],
    type: 'hot'
  },
  {
    name: 'Strogonoff',
    ingredients: ['proteína', 'champignon', 'arroz', 'cebola', 'alho', 'molho de tomate', 'creme vegetal', 'batata palha ou frita'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Galeto de frangos felizes',
    ingredients: ['maionese', 'batata rosa', 'cenoura', 'cebola', 'alho', 'milho', 'molho de tomate', 'espagueti', 'proteína'],
    type: 'hot'
  },
  {
    name: 'Feijão tropeiro',
    ingredients: ['feijão', 'farinha de mandioca', 'cenoura', 'couve', 'cebola', 'alho'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Arroz e feijão',
    ingredients: ['arroz', 'feijão', 'cebola', 'alho', 'tofu (ou tempê)', 'vegetais', 'salada'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Arroz e lentilha',
    ingredients: ['arroz', 'lentilha', 'cebola', 'alho', 'tofu (ou tempê)', 'vegetais', 'salada'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Tofu e legumes ao shoyo com arroz',
    ingredients: ['arroz', 'tofu', 'pimentão', 'cebola', 'cenoura', 'abobrinha', 'shoyo'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Almôndegas de seitan com arroz negro',
    ingredients: ['almôndsgas de seitan', 'arroz negro', 'molho de tomate', 'ervilhas'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Pizza de picado carnal com milho',
    ingredients: ['massa de pizza', 'picado carnal', 'milho enlatado', 'molho de tomate', 'orégano'],
    type: 'hot',
    highProtein: true
  },
  {
    name: 'Pizza de brócolis com milho',
    ingredients: ['massa de pizza', 'brócolis', 'milho enlatado', 'molho de tomate', 'orégano'],
    type: 'hot'
  },
  {
    name: 'Noodle com tofu ralado',
    ingredients: ['noodle (bifum)', 'tofu ralado', 'curcuma', ' páprica', 'caldo de legumes', 'tempero verde', 'cenoura, brócolis ou abobrinha fatiada à gosto'],
    type: 'hot',
  },
  {
    name: 'Salada de quinoa',
    ingredients: ['quinoa', 'tomate', 'pimentão', 'abacate', 'limão', 'coentro'],
    type: 'salad'
  },
  {
    name: 'Salada de falafel',
    ingredients: ['falafel', 'folhas verdes', 'tomate', 'azeitonas', 'humus'],
    type: 'salad'
  },
  {
    name: 'Saladão',
    ingredients: ['folhas verdes', 'tomate', 'azeitonas', 'milho', 'proteína (ex.: Heura)', 'crutons', 'pimenta'],
    type: 'salad',
    highProtein: true
  },
  {
    name: 'Salada de tofu',
    ingredients: ['mix de folhas', 'tomate', 'legumes cozidos (ou assados)', 'tofu', 'grão de bico', 'quinoa', 'levedura nutricional'],
    type: 'salad',
    highProtein: true
  },
  {
    name: 'Salada de quinoa e pistaches',
    ingredients: ['quinoa', 'pistache', 'cenoura ralada', 'ervilha', 'edamame', 'molho de gengibre', 'coentro', 'pepino ralado', 'agave', 'amêndoas', 'brócolis'],
    type: 'salad'
  },
  {
    name: 'Iron Energy',
    ingredients: ['folhas', 'quinoa', 'cranberries', 'nozes', 'uva verde', 'molho agridoce', 'brocolis', 'repolho'],
    type: 'salad'
  },
  {
    name: 'Salada de grão de bico',
    ingredients: ['grão de bico', 'cenoura', 'pimentão', 'coentro', 'suco de limão', 'pimenta'],
    type: 'salad'
  },
  {
    name: 'Salada de rúcula com tomates secos',
    ingredients: ['rúcula', 'tomates secos'],
    type: 'salad'
  },
  {
    name: 'Ramen',
    ingredients: ['massa de ramen', 'brócolis', 'cenoura', 'edamame', 'tofu', 'cebolinha', 'misô', 'milho'],
    type: 'soup'
  },
  {
    name: 'Sopa de legumes',
    ingredients: ['cenoura', 'abóbora', 'cebola', 'temperos'],
    type: 'soup'
  },
  {
    name: 'Canja sem galinha',
    ingredients: ['cenoura', 'cebola', 'alho', 'batata', 'arroz', 'tempero verde', 'proteína (grão de bico ou Heura)'],
    type: 'soup'
  },
  {
    name: 'Minestrone',
    ingredients: ['massa para sopa', 'feijão', 'ervilha', 'cenoura', 'molho de tomate'],
    type: 'soup',
    highProtein: true
  },
  {
    name: 'Sopa de batata doce cremosa',
    ingredients: ['batata doce', 'leite de côco', 'pimenta'],
    type: 'soup'
  },
  {
    name: 'Sopa de cenoura cremosa',
    ingredients: ['cenoura', 'cebola', 'alho'],
    type: 'soup'
  },
  {
    name: 'Sopa de moranga cremosa',
    ingredients: ['moranaga', 'cebola', 'alho'],
    type: 'soup'
  },
  {
    name: 'Caldo verde',
    ingredients: ['espinafre', 'brócolis', 'ervilha', 'cebola', 'alho', 'couve'],
    type: 'soup'
  },
  {
    name: 'Sopa de lentilha',
    ingredients: ['lentilha', 'cenoura', 'cebola', 'alho', 'tempero verde', 'tofu mexido'],
    type: 'soup',
    highProtein: true
  },
  {
    name: 'Sopa de feijão',
    ingredients: ['feijão', 'cenoura', 'cebola', 'alho', 'tempero verde', 'tofu mexido'],
    type: 'soup',
    highProtein: true
  },
  {
    name: 'Sopa cremosa de brócolis',
    ingredients: ['brócolis', 'batata', 'cenoura', 'ervilha', 'creme vegetal', 'grão de bico'],
    type: 'soup'
  },
  {
    name: 'Creme de couve-flor',
    ingredients: ['couve-flor', 'batata', 'alho', 'tempero verde', 'manjericão'],
    type: 'soup'
  },
  {
    name: 'Sopa de brócolis, batata e grão de bico',
    ingredients: ['brócolis', 'batata', 'grão de bico', 'alho', 'cebola', 'caldo de legumes', 'tempero verde'],
    type: 'soup'
  },
  {
    name: 'Sopa de côco ao curry com grão de bico e vegetais',
    ingredients: ['leite de côco', 'grão de bico', 'caldo de legumes', 'champignon', 'curry', 'cebola', 'alho', 'gengibre', 'brócolis', 'cenoura', 'alho poró'],
    type: 'soup'
  },
  {
    name: 'Creme de milho',
    ingredients: ['margarina', 'milho', 'batata', 'leite vegetal', 'caldo de legumes'],
    type: 'soup'
  },
  {
    name: 'Sanduíche de milanesa de seitan',
    ingredients: ['maionese ou humus', 'pão integral', 'bife à milanesa de seitan', 'tomate', 'alface'],
    type: 'sandwich',
    highProtein: true
  },
  {
    name: 'Xis Macaco',
    ingredients: ['pão de sanduíche', 'pasta de amendoim', 'banana', 'canela'],
    type: 'sandwich'
  },
  {
    name: 'Subway',
    ingredients: ['maionese ou humus', 'baguete', 'tomate', 'alface', 'cebola roxa', 'Heura'],
    type: 'sandwich',
    highProtein: true
  },
  {
    name: 'Hamburger',
    ingredients: ['maionese ou humus', 'pão de hamburger', 'tomate', 'alface', 'proteína'],
    type: 'sandwich',
    highProtein: true
  },
  {
    name: 'Cachorro quente',
    ingredients: ['pão de cachorro quente', 'salsicha', 'molho de tomate', 'milho', 'ervilha', 'batata palha', 'catchup', 'mostarda'],
    type: 'sandwich'
  },
  {
    name: 'Sanduíche de tomate e pepino',
    ingredients: ['humus ou margarina', 'pão francês', 'tomate', 'pepino', 'pimenta do reino'],
    type: 'sandwich'
  },
  {
    name: 'Sanduíche de abacate',
    ingredients: ['abacate', 'pão', 'pimenta do reino', 'sal'],
    type: 'sandwich'
  },
  {
    name: 'Sanduíche de vegetais',
    ingredients: ['pão de sanduíche tostado', 'alface', 'tomate', 'pimentão refogado', 'beringela refogada'],
    type: 'sandwich'
  },
  {
    name: 'Sanduíche de húmus com tomate e orégano',
    ingredients: ['pão de sanduíche integral', 'húmus', 'tomate', 'sal', 'orégano'],
    type: 'sandwich'
  },
  {
    name: 'Sanduíche de tofu mexido',
    ingredients: ['pão', 'tofu natural', 'levedura nutricional', 'alho', 'cúrcuma', 'salada mista'],
    type: 'sandwich',
    highProtein: true
  },
  {
    name: 'Sanduíche de falafel e tofu',
    ingredients: ['pão sírio', 'hummus', 'tofu natural', 'falafel', 'mix de folhas', 'tomate', 'pepino'],
    type: 'sandwich',
    highProtein: true
  },
  {
    name: 'Proteína + fruta com aveia',
    ingredients: ['proteína em pó', 'leite de soja', 'fruta', 'farelo de aveia'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Proteína + pão com tofu',
    ingredients: ['proteína em pó', 'leite de soja', 'pão', 'tofu mexido'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Overnight oats',
    ingredients: ['leite de soja', 'farelo de aveia', 'semente de chia', 'proteína em pó', 'fruta', 'geleia'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Avocado toast',
    ingredients: ['abacate', 'pão', 'tomate cereja', 'leite de soja', 'proteína em pó', 'fruta'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Proteína + Grãomelete',
    ingredients: ['farinha de grão de bico', 'vegetais', 'leite de soja', 'proteína em pó', 'fruta'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Proteína + Pão com hummus',
    ingredients: ['pão', 'hummus', 'leite de soja', 'proteína em pó', 'fruta'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Barra de proteína e fruta',
    ingredients: ['barra de proteína', 'fruta'],
    type: 'snack',
    highProtein: true
  },
  {
    name: 'Sorvete caseiro',
    ingredients: ['banana congelada', 'proteína em pó', 'leite vegetal', 'chia', 'granola sem açucar', 'outras frutas (opcional)'],
    type: 'snack',
    highProtein: true
  },
]
