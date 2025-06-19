import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import { 
  Satellite, 
  Brain, 
  MapPin, 
  Shield, 
  Users, 
  TrendingUp,
  Leaf,
  Eye,
  Target,
  ArrowLeft,
  CheckCircle,
  Globe,
  Heart
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-primary-100 px-4 py-2 rounded-full text-primary-800 font-medium mb-8 animate-fade-in">
              <Satellite className="h-4 w-4 ml-2" />
              منصة ذكية معتمدة على الذكاء الاصطناعي
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
              <span className="text-primary-600">نابت</span>
              <br />
              <span className="text-3xl md:text-4xl font-normal text-gray-700">
                تحليل الأراضي الذكي
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              منصة متكاملة تعتمد على الذكاء الاصطناعي وصور الأقمار الصناعية لتحليل الأراضي،
              مراقبة التدهور النباتي، وتفعيل حملات التشجير التشاركية في المملكة العربية السعودية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link 
                to="/analysis" 
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ابدأ تحليل الأراضي
                <ArrowLeft className="inline h-5 w-5 mr-2" />
              </Link>
              <Link 
                to="/campaigns" 
                className="bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Heart className="inline h-5 w-5 ml-2" />
                حملات التطوع تشجير
              </Link>
              <Link 
                to="/dashboard" 
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
              >
                لوحة التحكم
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              الوظائف الرئيسية للمنصة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ثلاث وظائف متكاملة تدعم الزراعة المستدامة ومكافحة التصحر
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Eye}
              title="الرصد والتحذير المبكر"
              description="مراقبة مستمرة للغطاء النباتي واكتشاف التدهور ومؤشرات التصحر في مراحلها المبكرة باستخدام صور الأقمار الصناعية والذكاء الاصطناعي"
              color="bg-primary-600"
            />
            <FeatureCard
              icon={Target}
              title="تحليل الأولوية والتوصيات"
              description="تقييم الأراضي من حيث قابليتها وأولويتها للتشجير، مع اقتراح الأنواع النباتية المناسبة لكل منطقة حسب خصائص التربة والمناخ"
              color="bg-secondary-600"
            />
            <FeatureCard
              icon={Users}
              title="تنفيذ ومتابعة الحملات"
              description="ربط الجهات الحكومية بالمتطوعين والمبادرات البيئية، ومتابعة حملات التشجير عبر خريطة تفاعلية ولوحة تحكم شاملة"
              color="bg-earth-600"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                تقنية متقدمة لحماية البيئة
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نستخدم أحدث تقنيات الذكاء الاصطناعي وتحليل صور الأقمار الصناعية 
                لتقديم حلول ذكية ودقيقة لتحديات التصحر والزراعة المستدامة
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 ml-3" />
                  <span className="text-gray-700">تحليل صور الأقمار الصناعية بدقة عالية</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 ml-3" />
                  <span className="text-gray-700">نماذج ذكاء اصطناعي متخصصة في تصنيف الأراضي</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 ml-3" />
                  <span className="text-gray-700">خرائط حرارية تفاعلية لرصد التغيرات</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 ml-3" />
                  <span className="text-gray-700">إشعارات تلقائية للتدخل السريع</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Satellite className="h-8 w-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">صور الأقمار</h4>
                    <p className="text-sm text-gray-600">تحليل مستمر عالي الدقة</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Brain className="h-8 w-8 text-secondary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">الذكاء الاصطناعي</h4>
                    <p className="text-sm text-gray-600">تصنيف وتنبؤ ذكي</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <MapPin className="h-8 w-8 text-earth-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">خرائط تفاعلية</h4>
                    <p className="text-sm text-gray-600">عرض بصري شامل</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <Shield className="h-8 w-8 text-saudi-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">حماية بيئية</h4>
                    <p className="text-sm text-gray-600">مكافحة التصحر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">الأثر المتوقع</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              مساهمة فعالة في تحقيق أهداف رؤية المملكة 2030 البيئية
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">تسريع التشجير</h3>
              <p className="text-primary-100">زيادة كفاءة حملات التشجير</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">مكافحة التصحر</h3>
              <p className="text-primary-100">تقليل معدلات تدهور الأراضي</p>
            </div>
            <div className="text-center">
              <Brain className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">استخدام ذكي</h3>
              <p className="text-primary-100">تحسين استخدام الموارد</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">مشاركة مجتمعية</h3>
              <p className="text-primary-100">إشراك المجتمع في الحلول</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            انضم إلى مستقبل الزراعة الذكية
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            ساهم في بناء بيئة مستدامة للأجيال القادمة من خلال التقنيات الذكية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/analysis" 
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ابدأ الآن
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-300">
              تعرف على المزيد
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 p-2 rounded-xl ml-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">نابت</h3>
                  <p className="text-gray-400 text-sm">منصة تحليل الأراضي الذكية</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                منصة ذكية متخصصة في تحليل الأراضي داخل المملكة العربية السعودية، 
                بهدف دعم الزراعة والتشجير المستدام
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">تحليل الأراضي</a></li>
                <li><a href="#" className="hover:text-white transition-colors">مراقبة النباتات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">حملات التشجير</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التقارير</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التوثيق</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 منصة نابت. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;