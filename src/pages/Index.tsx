import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tournaments = [
    {
      id: 1,
      name: 'Flick Championship 2025',
      date: '5 декабря 2025',
      prize: '200₽',
      status: 'Регистрация открыта',
      type: 'online'
    },
    {
      id: 2,
      name: 'Winter Cup',
      date: '15 января 2026',
      prize: '270₽',
      status: 'Скоро',
      type: 'online'
    },
    {
      id: 3,
      name: 'Pro League Season 1',
      date: '1 февраля 2026',
      prize: '200₽',
      status: 'Скоро',
      type: 'online'
    }
  ];

  const leaderboard = [
    { rank: 1, username: 'FlickMaster', rating: 2450 },
    { rank: 2, username: 'ProShooter', rating: 2380 },
    { rank: 3, username: 'AimGod', rating: 2340 },
    { rank: 4, username: 'QuickFlick', rating: 2290 },
    { rank: 5, username: 'SniperElite', rating: 2250 }
  ];

  const schedule = [
    { time: '18:00', event: 'Четвертьфинал #1', stage: 'BO3' },
    { time: '19:30', event: 'Четвертьфинал #2', stage: 'BO3' },
    { time: '21:00', event: 'Полуфинал #1', stage: 'BO5' },
    { time: '23:00', event: 'Гранд-финал', stage: 'BO7' }
  ];

  const prizes = [
    { place: '1 место', amount: '100₽', icon: 'Trophy' },
    { place: '2 место', amount: '60₽', icon: 'Medal' },
    { place: '3 место', amount: '40₽', icon: 'Award' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <header className="border-b border-neon-cyan/20 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center animate-pulse-glow">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-3xl font-rajdhani font-bold neon-glow">FLICK ARENA</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              {['Главная', 'Турниры', 'Таблица', 'Расписание', 'Призы'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item.toLowerCase())}
                  className={`font-rajdhani text-lg transition-all hover:text-neon-cyan ${
                    activeTab === item.toLowerCase() ? 'text-neon-cyan' : 'text-white/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <Button className="bg-gradient-cyber hover:opacity-90 font-rajdhani text-lg">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-slide-up">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 p-12 border border-neon-cyan/30">
              <div className="relative z-10">
                <Badge className="mb-4 bg-neon-cyan/20 text-neon-cyan border-neon-cyan">
                  <Icon name="Radio" size={16} className="mr-1 animate-pulse" />
                  LIVE STREAM
                </Badge>
                <h2 className="text-6xl font-rajdhani font-bold mb-4 neon-glow">
                  FLICK CHAMPIONSHIP 2025
                </h2>
                <p className="text-xl text-white/80 mb-6 max-w-2xl">
                  Присоединяйся к самому масштабному турниру по Flick. Призовой фонд 200₽!
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-gradient-cyber hover:opacity-90 font-rajdhani text-lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Смотреть трансляцию
                  </Button>
                  <Button size="lg" variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-rajdhani text-lg">
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Участвовать
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-rajdhani font-bold text-white">Активные турниры</h3>
                <Button variant="ghost" className="text-neon-cyan hover:text-neon-cyan/80">
                  Показать все
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tournaments.map((tournament) => (
                  <Card key={tournament.id} className="bg-card/40 backdrop-blur-sm border-neon-cyan/20 hover:border-neon-cyan/50 transition-all hover:scale-105">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">
                          {tournament.type.toUpperCase()}
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500">
                          {tournament.status}
                        </Badge>
                      </div>
                      <CardTitle className="font-rajdhani text-2xl">{tournament.name}</CardTitle>
                      <CardDescription className="text-white/60">
                        <Icon name="Calendar" size={16} className="inline mr-1" />
                        {tournament.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white/60">Призовой фонд:</span>
                          <span className="text-neon-cyan font-bold text-xl">{tournament.prize}</span>
                        </div>
                        <Button className="w-full bg-gradient-cyber hover:opacity-90 font-rajdhani">
                          Зарегистрироваться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/40 backdrop-blur-sm border-neon-cyan/20">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-2xl flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-neon-cyan" />
                    Топ игроков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboard.map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-all">
                        <div className="flex items-center gap-4">
                          <span className={`font-rajdhani text-2xl font-bold ${
                            player.rank === 1 ? 'text-neon-cyan' : player.rank === 2 ? 'text-neon-purple' : 'text-white'
                          }`}>
                            #{player.rank}
                          </span>
                          <div>
                            <p className="font-bold text-white">{player.username}</p>
                          </div>
                        </div>
                        <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan font-rajdhani text-lg">
                          {player.rating}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/40 backdrop-blur-sm border-neon-purple/20">
                <CardHeader>
                  <CardTitle className="font-rajdhani text-2xl flex items-center gap-2">
                    <Icon name="Clock" size={24} className="text-neon-purple" />
                    Расписание на сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-black/30 hover:bg-black/50 transition-all">
                        <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple font-rajdhani text-lg">
                          {item.time}
                        </Badge>
                        <div className="flex-1">
                          <p className="font-bold text-white">{item.event}</p>
                          <p className="text-sm text-white/60">{item.stage}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="text-neon-cyan hover:text-neon-cyan/80">
                          <Icon name="Bell" size={18} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h3 className="text-3xl font-rajdhani font-bold text-white mb-6 text-center">Призовой фонд</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {prizes.map((prize, index) => (
                  <Card key={index} className={`bg-card/40 backdrop-blur-sm border-2 ${
                    index === 0 ? 'border-neon-cyan' : index === 1 ? 'border-neon-purple' : 'border-neon-pink'
                  } hover:scale-105 transition-all`}>
                    <CardHeader className="text-center">
                      <Icon name={prize.icon as any} size={48} className={`mx-auto mb-4 ${
                        index === 0 ? 'text-neon-cyan' : index === 1 ? 'text-neon-purple' : 'text-neon-pink'
                      }`} />
                      <CardTitle className="font-rajdhani text-2xl">{prize.place}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className={`text-4xl font-rajdhani font-bold ${
                        index === 0 ? 'text-neon-cyan' : index === 1 ? 'text-neon-purple' : 'text-neon-pink'
                      }`}>
                        {prize.amount}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="border-t border-neon-cyan/20 bg-black/40 backdrop-blur-md mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-cyber flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="font-rajdhani font-bold text-lg">FLICK ARENA</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-neon-cyan transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <p className="text-white/60 text-sm">© 2024 Flick Arena. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;