import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-16 lg:py-24">
        
        {/* Hero Section */}
        <section className="mb-40 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
                  Александр Кузиков
                </h1>
                <p className="text-2xl lg:text-3xl text-muted-foreground font-normal leading-snug">
                  Работаю с ростом выручки через продукт, маркетинг и продажи
                </p>
              </div>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Соединяю коммерцию, маркетинг и операционные процессы в единую систему. Фокус — управляемый рост и устойчивый коммерческий результат.
              </p>
              <div className="flex gap-3 pt-6">
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 bg-foreground hover:bg-foreground/90">
                  <Icon name="Linkedin" size={18} />
                  LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base gap-2 border-2">
                  <Icon name="Mail" size={18} />
                  Контакт
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/533c674c-082a-43ee-b180-96c3545f1295/bucket/34035df4-b038-46c3-979f-0e41a5c4f0e5.png" 
                  alt="Александр Кузиков"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-40 animate-fade-in">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-4xl font-semibold text-foreground">О себе</h2>
            </div>
            <div className="lg:col-span-2 space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Работаю с ростом выручки через продукт, маркетинг и продажи. Соединяю коммерцию, маркетинг и операционные процессы в единую логику — так, чтобы система давала результат.
              </p>
              <p>
                <span className="text-foreground font-normal">Опыт</span> — fashion, beauty, wellness. Федеральные и международные бренды: Shopping Live, MODIS, SELA, O'STIN (Funday), New Yorker, Charuel, Reserved, Cropp, Mohito, Sinsay. Рынки — РФ и СНГ.
              </p>
              <p>
                Работал в разных форматах: офлайн-ритейл, e-commerce, live и TV commerce. Хорошо понимаю продукт и спрос благодаря опыту продаж и управлению ассортиментом.
              </p>
              <p>
                В работе опираюсь на аналитику, рыночную насмотренность и команды. Фокус — управляемый рост и устойчивый коммерческий результат.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-40 animate-fade-in">
          <h2 className="text-4xl font-semibold text-foreground mb-16">Чем я полезен бизнесу</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "TrendingUp",
                text: "Помогаю выполнять план по выручке через связку продукта, маркетинга и продаж. Система важнее отдельных инструментов."
              },
              {
                icon: "Package",
                text: "Привожу продукт и ассортимент в соответствие со спросом: позиционирование, внешний вид, логика предложения, товарные метрики."
              },
              {
                icon: "BarChart3",
                text: "Повышаю эффективность продаж через управление остатками, скоростью и оборачиваемостью. Решения принимаю на основе данных."
              },
              {
                icon: "Users",
                text: "Собираю и усиливаю команды под задачу. Выстраиваю работу так, чтобы результат держался на системе."
              },
              {
                icon: "Lightbulb",
                text: "Захожу в новые направления и форматы за счёт широкой бизнес-насмотренности и понимания людей. Это помогает быстро ориентироваться и находить рабочие решения."
              }
            ].map((item, index) => (
              <Card key={index} className="p-10 rounded-3xl border-0 bg-card hover:bg-muted/50 transition-colors duration-200">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed font-light">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* How I Work */}
        <section className="mb-40 animate-fade-in">
          <div className="grid lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-4xl font-semibold text-foreground">Как я работаю</h2>
            </div>
            <div className="lg:col-span-2 space-y-10">
              {[
                "Беру ответственность за решения и объясняю логику команде. Это сокращает лишние согласования и ускоряет движение.",
                "Смотрю на контекст и меняю стиль управления в зависимости от задачи и людей. Где нужно — принимаю решение. Где важно — помогаю команде дойти до него.",
                "Считаю ошибки частью роста. Повторяемые ошибки — повод пересобрать систему.",
                "Уделяю внимание людям и процессам, чтобы команда усиливалась и работала устойчиво. Результат должен держаться на структуре."
              ].map((text, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-3 shrink-0" />
                  <p className="text-xl text-foreground leading-relaxed font-light">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers & Scale */}
        <section className="mb-40 animate-fade-in">
          <div className="space-y-6 mb-16">
            <h2 className="text-4xl font-semibold text-foreground">Цифры и масштаб</h2>
            <p className="text-muted-foreground text-lg font-light">Цифры использую как инструмент управления и ориентир для решений.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-12 rounded-3xl bg-foreground text-background border-0">
              <div className="text-6xl font-semibold mb-6 tracking-tight">40–120+</div>
              <p className="text-background/80 text-lg leading-relaxed font-light">Управление кросс-функциональными командами: продукт, маркетинг, продажи, креатив, операционка</p>
            </Card>
            <Card className="p-12 rounded-3xl bg-card border-0">
              <div className="text-6xl font-semibold mb-6 text-foreground tracking-tight">100+</div>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">Работа с розничными сетями в сотни магазинов, e-commerce и live/TV commerce</p>
            </Card>
            <Card className="p-12 rounded-3xl bg-card border-0">
              <div className="text-5xl font-semibold mb-6 text-foreground tracking-tight">РФ + СНГ</div>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">Опыт работы с федеральными и международными retail-сетями в разных форматах</p>
            </Card>
          </div>

          <div className="space-y-6">
            {[
              "Опыт работы с федеральными и международными retail-сетями в РФ и СНГ. Разные форматы и уровни зрелости бизнеса.",
              "Коммерческие результаты в проектах: рост выручки и конверсии, снижение затрат, ускорение вывода продукта и решений."
            ].map((text, index) => (
              <div key={index} className="flex gap-5 items-start">
                <Icon name="CheckCircle2" size={24} className="text-foreground shrink-0 mt-1" strokeWidth={1.5} />
                <p className="text-xl text-foreground leading-relaxed font-light">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience / Industries */}
        <section className="mb-40 animate-fade-in">
          <h2 className="text-4xl font-semibold text-foreground mb-12">Опыт и индустрии</h2>
          <div className="flex flex-wrap gap-3">
            {['Fashion', 'Beauty', 'Wellness', 'Retail', 'E-commerce', 'Live Commerce', 'TV Commerce', 'РФ', 'СНГ'].map((tag, index) => (
              <span key={index} className="px-7 py-4 bg-card text-foreground rounded-full text-base font-normal">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="animate-fade-in">
          <Card className="p-16 lg:p-20 rounded-3xl bg-foreground text-background border-0">
            <div className="max-w-3xl space-y-8">
              <h2 className="text-5xl font-semibold">Контакт</h2>
              <p className="text-2xl leading-relaxed text-background/80 font-light">
                Открыт к диалогу по управленческим и коммерческим ролям, где важны рост выручки, продукт и системный подход.
              </p>
              <div className="flex gap-3 flex-wrap pt-4">
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 bg-background text-foreground hover:bg-background/90">
                  <Icon name="Linkedin" size={18} />
                  Связаться через LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base gap-2 border-2 border-background/20 text-background hover:bg-background/10">
                  <Icon name="FileText" size={18} />
                  Посмотреть проекты
                </Button>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Index;
