import React, { useState } from 'react';
import { X, Download, BookOpen, Github, FileText, CheckCircle2, ShieldCheck, Volume2, Sparkles } from 'lucide-react';

interface HelpDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpDocsModal: React.FC<HelpDocsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'manual' | 'github'>('manual');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-neutral-900 border border-neutral-700 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Заголовок модального окна */}
        <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-100">Справка, Инструкция и Код для GitHub</h2>
              <p className="text-xs text-neutral-400">Плеер «Артёмка» • Документация и архив репозитория</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Панель скачивания ZIP архивов */}
        <div className="p-4 bg-gradient-to-r from-amber-950/30 via-neutral-900 to-indigo-950/30 border-b border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-neutral-300">
            <span className="font-semibold text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Готовые ZIP-архивы для скачивания:
            </span>
            <p className="text-neutral-400 mt-0.5">Всё подготовлено для мгновенной выгрузки на ваш компьютер или телефон.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/artemka-docs.zip"
              download="artemka-docs.zip"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold transition active:scale-95 shadow"
              title="Скачать инструкцию и справку (USER_MANUAL.md, README.md)"
            >
              <Download className="w-3.5 h-3.5" />
              Инструкция (.ZIP)
            </a>
            <a
              href="/artemka-full-project-github.zip"
              download="artemka-full-project-github.zip"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-xl text-xs font-bold transition active:scale-95 shadow"
              title="Скачать полный исходный код проекта для публикации на GitHub"
            >
              <Download className="w-3.5 h-3.5" />
              Весь проект для GitHub (.ZIP)
            </a>
          </div>
        </div>

        {/* Вкладки переключения разделов */}
        <div className="px-5 pt-3 flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/50">
          <button
            type="button"
            onClick={() => setActiveTab('manual')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'manual'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Инструкция пользователя
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('github')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 flex items-center gap-1.5 transition cursor-pointer ${
              activeTab === 'github'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Github className="w-4 h-4" />
            Код и публикация на GitHub
          </button>
        </div>

        {/* Прокручиваемый контент */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
          {activeTab === 'manual' ? (
            <div className="space-y-4">
              <div className="p-3.5 bg-neutral-800/60 rounded-2xl border border-neutral-700/60">
                <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1. Светофор и терапевтический цикл
                </h3>
                <ul className="list-disc list-inside space-y-1 text-neutral-300 ml-1">
                  <li><strong>Левый светофор (Фабулы .flac)</strong>: последовательные сигналы Красный → Жёлтый → Зелёный.</li>
                  <li><strong>Правый светофор (БРТ .mp3)</strong>: зелёный пешеход («Поехали») для запуска сессии БРТ.</li>
                  <li><strong>Таймер 2 часа (120 минут)</strong>: строгий период физиологического отдыха между фабулой и БРТ, а также перед следующим цветом светофора.</li>
                  <li><strong>Ночной спящий режим до 04:00 утра</strong>: включается после зелёного этапа и блокирует случайный повторный запуск ночью.</li>
                </ul>
              </div>

              <div className="p-3.5 bg-neutral-800/60 rounded-2xl border border-neutral-700/60">
                <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  2. Кнопка зацикливания (терапевтические режимы)
                </h3>
                <div className="space-y-1.5 text-neutral-300">
                  <p>• <span className="font-bold text-neutral-200">«По треку»</span>: обычное воспроизведение без повторов.</p>
                  <p>• <span className="font-bold text-emerald-300">«Д»</span>: детский 20-минутный режим для фабул.</p>
                  <p>• <span className="font-bold text-sky-300">«1Брт»</span>: 20-минутная сессия БРТ с зацикливанием одного трека.</p>
                  <p>• <span className="font-bold text-amber-300">«4Брт»</span>: последовательный кольцевой цикл треков (1→2→3→4→1...) со старта первого трека и <strong>мягкой отсечкой</strong> (по истечении 20 минут активный трек спокойно доигрывает до конца без обрыва).</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-800/60 rounded-2xl border border-neutral-700/60">
                <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  3. Дискретный стереовывод и курс 5/2
                </h3>
                <p>
                  В плеере отключено программное моно-микширование. Левый и правый каналы воспроизводятся 100% независимо для сохранения бинаурального терапевтического эффекта.
                  Курс 5/2 автоматически отсчитывает 5 рабочих дней и 2 дня выходных.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3.5 bg-neutral-800/60 rounded-2xl border border-neutral-700/60">
                <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                  <Github className="w-4 h-4 text-amber-400" />
                  Команды для публикации на GitHub
                </h3>
                <p className="text-xs text-neutral-400 mb-2">
                  Скачайте архив проекта по кнопке вверху, распакуйте его и выполните в терминале:
                </p>
                <div className="bg-black/80 rounded-xl p-3 font-mono text-xs text-emerald-400 overflow-x-auto space-y-1 border border-neutral-800">
                  <p>git init</p>
                  <p>git branch -M main</p>
                  <p>git add .</p>
                  <p>git commit -m "Initial commit: Artemka audio therapy player"</p>
                  <p className="text-neutral-400"># Замените ссылку на адрес вашего репозитория GitHub:</p>
                  <p>git remote add origin https://github.com/ВАШ_ЛОГИН/artemka-player.git</p>
                  <p>git push -u origin main</p>
                </div>
              </div>

              <div className="p-3.5 bg-neutral-800/60 rounded-2xl border border-neutral-700/60">
                <h3 className="font-bold text-white text-sm mb-1.5">Сборка и запуск локально</h3>
                <div className="bg-black/80 rounded-xl p-3 font-mono text-xs text-sky-400 overflow-x-auto space-y-1 border border-neutral-800">
                  <p className="text-neutral-400"># Установка зависимостей:</p>
                  <p>npm install</p>
                  <p className="text-neutral-400"># Запуск сервера разработки (http://localhost:3000):</p>
                  <p>npm run dev</p>
                  <p className="text-neutral-400"># Продакшен сборка:</p>
                  <p>npm run build</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Футер */}
        <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs text-neutral-400">
          <span>Файлы в корне проекта: <code>USER_MANUAL.md</code>, <code>README.md</code></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xl font-semibold transition cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
