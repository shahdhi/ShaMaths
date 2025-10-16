import { Mail, Phone, MapPin, FileText, Shield, Clock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CommercialTransactionsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-700 hover:text-primary-800 font-medium mb-8 group transition-colors"
        >
          <ArrowLeft
            size={20}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          戻る
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-primary-700 mr-3" />
              <h1 className="text-3xl font-serif font-bold text-gray-900">
                特定商取引法に基づく表記
              </h1>
            </div>
            <p className="text-gray-600">
              Specified Commercial Transactions Act
            </p>
          </div>

          <div className="space-y-8">
            {/* 事業者情報 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-primary-700 mr-2" />
                事業者情報
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">事業者名</h3>
                  <p className="text-gray-900">Mohammad Shahdhi - モハマッド サヂイ</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">所在地</h3>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-900">
                      〒616-8066<br />
                      京都府右京区太秦安井車道町8-3<br />
                      ゲストハウスハナゾノ1-B
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">メールアドレス</h3>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-900">contact@shademy.online</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">電話番号</h3>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-900">+81 70-9328-3467</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 販売価格 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">販売価格</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  各コース・サービスの料金は、サービスページに表示された金額とします。<br />
                  消費税は料金に含まれております。
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• 個人指導セッション: ¥1,000/回</li>
                  <li>• コース料金: サービスページに表示</li>
                  <li>• その他追加費用: 表示なし</li>
                </ul>
              </div>
            </section>

            {/* お支払い方法 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">お支払い方法</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• クレジットカード決済 (Stripe経由)</li>
                  <li>• 銀行振込 (事前相談)</li>
                </ul>
              </div>
            </section>

            {/* お支払い時期 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">お支払い時期</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  サービス提供前にお支払いを完了していただきます。<br />
                  クレジットカード決済の場合は即時決済となります。
                </p>
              </div>
            </section>

            {/* サービス提供時期 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-primary-700 mr-2" />
                サービス提供時期
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  お支払い確認後、速やかにサービスを提供いたします。<br />
                  具体的な日程は個別に調整させていただきます。
                </p>
              </div>
            </section>

            {/* キャンセル・返品・返金 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">キャンセル・返品・返金について</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">キャンセルポリシー</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• セッション24時間前までのキャンセル: 全額返金</li>
                  <li>• セッション24時間以内のキャンセル: 返金不可</li>
                  <li>• 講師都合によるキャンセル: 全額返金</li>
                </ul>
                
                <h3 className="font-semibold text-gray-800 mb-2">返金ポリシー</h3>
                <p className="text-gray-700">
                  サービスに重大な問題がある場合、返金対応をいたします。<br />
                  返金希望の場合は、メールにてご連絡ください。
                </p>
              </div>
            </section>

            {/* 追加費用 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">追加費用</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  表示価格以外の追加費用は発生しません。<br />
                  ただし、特別な教材やテキストが必要な場合は別途ご案内いたします。
                </p>
              </div>
            </section>

            {/* 動作環境 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">動作環境</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-3">【オンラインセッションの場合】</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 安定したインターネット接続</li>
                  <li>• ZoomまたはGoogle Meetが利用できる環境</li>
                  <li>• カメラ・マイク付きデバイス</li>
                </ul>
              </div>
            </section>

            {/* 資格・免許 */}
            <section className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">資格・免許</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  数学教育における専門知識と指導経験を有しております。<br />
                  具体的な資格情報はお問い合わせください。
                </p>
              </div>
            </section>

            {/* その他 */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">その他</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  本サービスは個人指導を主としており、成績保証はいたしません。<br />
                  お客様の努力と当方の指導により成果を目指します。
                </p>
                <p className="text-gray-700 mt-3">
                  最終更新日: 2024年1月
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm">
          <p>ご質問がございましたら、お気軽にお問い合わせください。</p>
          <p>© 2024 ShaDemy. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
