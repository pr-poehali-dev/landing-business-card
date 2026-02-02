import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-12">
        
        {/* Hero Section */}
        <section className="mb-32 animate-fade-in">
          <div className="space-y-8">
            <p className="text-lg lg:text-xl text-muted-foreground font-medium tracking-wide">
              Александр Кузиков
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Работаю с ростом выручки через продукт, маркетинг и продажи
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
              Соединяю коммерцию, маркетинг и операционные процессы в единую систему.
              Фокус — управляемый рост и устойчивый коммерческий результат.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Icon name="Linkedin" size={20} />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Mail" size={20} />
                Контакт
              </Button>
            </div>
          </div>
        </section>

        <Separator className="mb-32" />

        {/* About Section */}
        <section className="mb-32 animate-fade-in">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-foreground mb-4">О себе</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Работаю с ростом выручки через продукт, маркетинг и продажи.
                Соединяю коммерцию, маркетинг и операционные процессы в единую логику — так, чтобы система давала результат.
              </p>
              <p>
                <span className="text-foreground font-medium">Опыт</span> — fashion, beauty, wellness.
                Федеральные и международные бренды: Shopping Live, MODIS, SELA, O'STIN (Funday), New Yorker, Charuel, Reserved, Cropp, Mohito, Sinsay.
                Рынки — РФ и СНГ.
              </p>
              <p>
                Работал в разных форматах: офлайн-ритейл, e-commerce, live и TV commerce.
                Хорошо понимаю продукт и спрос благодаря опыту продаж и управлению ассортиментом.
              </p>
              <p>
                В работе опираюсь на аналитику, рыночную насмотренность и команды.
                Фокус — управляемый рост и устойчивый коммерческий результат.
              </p>
            </div>
          </div>
        </section>

        <Separator className="mb-32" />

        {/* Value Proposition */}
        <section className="mb-32 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-16">Чем я полезен бизнесу</h2>
          <div className="grid md:grid-cols-2 gap-8">
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
              <Card key={index} className="p-8 border-2 hover:border-primary transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="mb-32" />

        {/* How I Work */}
        <section className="mb-32 animate-fade-in">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-foreground mb-4">Как я работаю</h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {[
                "Беру ответственность за решения и объясняю логику команде. Это сокращает лишние согласования и ускоряет движение.",
                "Смотрю на контекст и меняю стиль управления в зависимости от задачи и людей. Где нужно — принимаю решение. Где важно — помогаю команде дойти до него.",
                "Считаю ошибки частью роста. Повторяемые ошибки — повод пересобрать систему.",
                "Уделяю внимание людям и процессам, чтобы команда усиливалась и работала устойчиво. Результат должен держаться на структуре."
              ].map((text, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="mb-32" />

        {/* Numbers & Scale */}
        <section className="mb-32 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Цифры и масштаб</h2>
          <p className="text-muted-foreground text-sm mb-12 italic">Цифры использую как инструмент управления и ориентир для решений.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-primary text-primary-foreground">
              <div className="text-5xl font-bold mb-4">40–120+</div>
              <p className="text-primary-foreground/90">Управление кросс-функциональными командами: продукт, маркетинг, продажи, креатив, операционка</p>
            </Card>
            <Card className="p-8 bg-secondary border-2">
              <div className="text-5xl font-bold mb-4 text-foreground">100+</div>
              <p className="text-muted-foreground">Работа с розничными сетями в сотни магазинов, e-commerce и live/TV commerce</p>
            </Card>
            <Card className="p-8 bg-secondary border-2">
              <div className="text-5xl font-bold mb-4 text-foreground">РФ + СНГ</div>
              <p className="text-muted-foreground">Опыт работы с федеральными и международными retail-сетями в разных форматах</p>
            </Card>
          </div>

          <div className="mt-12 space-y-4">
            {[
              "Опыт работы с федеральными и международными retail-сетями в РФ и СНГ. Разные форматы и уровни зрелости бизнеса.",
              "Коммерческие результаты в проектах: рост выручки и конверсии, снижение затрат, ускорение вывода продукта и решений."
            ].map((text, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Icon name="CheckCircle2" size={24} className="text-primary shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-32" />

        {/* Experience / Industries */}
        <section className="mb-32 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8">Опыт и индустрии</h2>
          <div className="flex flex-wrap gap-4 text-lg">
            {['Fashion', 'Beauty', 'Wellness', 'Retail', 'E-commerce', 'Live Commerce', 'TV Commerce', 'РФ', 'СНГ'].map((tag, index) => (
              <span key={index} className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA / Contact */}
        <section className="py-20 animate-fade-in">
          <Card className="p-12 lg:p-16 bg-foreground text-background">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">Контакт</h2>
              <p className="text-xl leading-relaxed mb-8 text-background/90">
                Открыт к диалогу по управленческим и коммерческим ролям,
                где важны рост выручки, продукт и системный подход.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Linkedin" size={20} />
                  Связаться через LinkedIn
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent text-background border-background hover:bg-background hover:text-foreground">
                  <Icon name="FileText" size={20} />
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