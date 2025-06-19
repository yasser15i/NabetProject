import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Upload, 
  MapPin, 
  Satellite, 
  Brain, 
  Leaf,
  Droplets, 
  Thermometer,
  CheckCircle,
  AlertTriangle,
  Download,
  Eye,
  Target,
  FileText,
  Printer,
  Image,
  TreePine,
  Camera
} from 'lucide-react';

interface AnalysisResults {
  suitability: string;
  soilType: string;
  waterAvailability: string;
  climate: string;
  recommendations: string[];
  priority: string;
  interventionType: string;
  images: {
    normal: string;
    thermal: string;
    vegetation: string;
    future: string;
  };
}

interface Province {
  name: string;
  cities: string[];
}

interface Region {
  name: string;
  provinces: Record<string, Province>;
}

const AnalysisPage = () => {
  const [analysisStep, setAnalysisStep] = useState(1);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedImageView, setSelectedImageView] = useState('normal');

  // جميع مناطق المملكة العربية السعودية مع محافظاتها ومدنها
  const saudiRegions: Record<string, Region> = {
    'riyadh': {
      name: 'منطقة الرياض',
      provinces: {
        'riyadh-city': { 
          name: 'الرياض', 
          cities: ['الرياض', 'الدرعية', 'الخرج', 'المزاحمية', 'ضرما', 'حريملاء', 'الدوادمي', 'عفيف', 'القويعية', 'وادي الدواسر', 'الأفلاج', 'السليل', 'الحوطة والحريق'] 
        },
        'dawadmi': { 
          name: 'الدوادمي', 
          cities: ['الدوادمي', 'عفيف', 'القويعية', 'مرات'] 
        },
        'zulfi': { 
          name: 'الزلفي', 
          cities: ['الزلفي', 'الغاط', 'المجمعة', 'رماح', 'ثادق', 'شقراء', 'الدوادمي'] 
        },
        'aflaj': {
          name: 'الأفلاج',
          cities: ['ليلى', 'السليل', 'الأفلاج']
        },
        'wadi-aldawasir': {
          name: 'وادي الدواسر',
          cities: ['وادي الدواسر', 'السليل']
        }
      }
    },
    'makkah': {
      name: 'منطقة مكة المكرمة',
      provinces: {
        'makkah-city': { 
          name: 'مكة المكرمة', 
          cities: ['مكة المكرمة', 'جدة', 'الطائف', 'المدينة المنورة', 'ينبع', 'رابغ', 'خليص', 'الكامل', 'الجموم', 'بحرة', 'الخرمة', 'رنية', 'تربة', 'الموية', 'ميسان'] 
        },
        'jeddah': {
          name: 'جدة',
          cities: ['جدة', 'رابغ', 'خليص', 'الكامل']
        },
        'taif': {
          name: 'الطائف',
          cities: ['الطائف', 'الخرمة', 'رنية', 'تربة', 'الموية', 'ميسان']
        },
        'qunfudhah': { 
          name: 'القنفذة', 
          cities: ['القنفذة', 'الليث', 'أضم', 'الكامل'] 
        },
        'rabigh': { 
          name: 'رابغ', 
          cities: ['رابغ', 'خليص', 'مستورة'] 
        }
      }
    },
    'madinah': {
      name: 'منطقة المدينة المنورة',
      provinces: {
        'madinah-city': { 
          name: 'المدينة المنورة', 
          cities: ['المدينة المنورة', 'ينبع', 'العلا', 'بدر', 'خيبر', 'المهد', 'الحناكية', 'وادي الفرع'] 
        },
        'yanbu': {
          name: 'ينبع',
          cities: ['ينبع', 'ينبع البحر', 'ينبع النخل']
        },
        'alula': {
          name: 'العلا',
          cities: ['العلا', 'تيماء', 'ضباء']
        },
        'mahd': { 
          name: 'مهد الذهب', 
          cities: ['مهد الذهب', 'الحناكية'] 
        }
      }
    },
    'eastern': {
      name: 'المنطقة الشرقية',
      provinces: {
        'dammam': { 
          name: 'الدمام', 
          cities: ['الدمام', 'الخبر', 'الظهران', 'القطيف', 'الجبيل', 'رأس تنورة', 'سيهات', 'صفوى', 'تاروت'] 
        },
        'ahsa': { 
          name: 'الأحساء', 
          cities: ['الهفوف', 'المبرز', 'العيون', 'الجفر', 'العديد', 'حرض'] 
        },
        'qatif': { 
          name: 'القطيف', 
          cities: ['القطيف', 'صفوى', 'سيهات', 'تاروت', 'عنك'] 
        },
        'jubail': {
          name: 'الجبيل',
          cities: ['الجبيل', 'رأس تنورة', 'الخفجي']
        },
        'khafji': {
          name: 'الخفجي',
          cities: ['الخفجي', 'رأس الخير']
        }
      }
    },
    'qassim': {
      name: 'منطقة القصيم',
      provinces: {
        'buraydah': {
          name: 'بريدة',
          cities: ['بريدة', 'عنيزة', 'الرس', 'المذنب', 'البكيرية', 'الأسياح', 'النبهانية', 'عيون الجواء', 'الشماسية', 'ضرية', 'رياض الخبراء']
        },
        'unaizah': {
          name: 'عنيزة',
          cities: ['عنيزة', 'الرس', 'المذنب']
        },
        'rass': {
          name: 'الرس',
          cities: ['الرس', 'المذنب', 'البكيرية']
        }
      }
    },
    'asir': {
      name: 'منطقة عسير',
      provinces: {
        'abha': {
          name: 'أبها',
          cities: ['أبها', 'خميس مشيط', 'النماص', 'تنومة', 'المجاردة', 'رجال ألمع', 'محايل عسير', 'ظهران الجنوب', 'سراة عبيدة', 'البرك', 'بلقرن', 'طريب']
        },
        'khamis-mushait': {
          name: 'خميس مشيط',
          cities: ['خميس مشيط', 'أحد رفيدة', 'ظهران الجنوب']
        },
        'muhayil': {
          name: 'محايل عسير',
          cities: ['محايل عسير', 'البرك', 'بارق']
        },
        'namas': {
          name: 'النماص',
          cities: ['النماص', 'تنومة', 'بلقرن']
        }
      }
    },
    'hail': {
      name: 'منطقة حائل',
      provinces: {
        'hail-city': {
          name: 'حائل',
          cities: ['حائل', 'بقعاء', 'الغزالة', 'الشنان', 'السليمي', 'الحائط', 'الشملي', 'موقق']
        },
        'baqaa': {
          name: 'بقعاء',
          cities: ['بقعاء', 'الغزالة', 'الشنان']
        }
      }
    },
    'tabuk': {
      name: 'منطقة تبوك',
      provinces: {
        'tabuk-city': {
          name: 'تبوك',
          cities: ['تبوك', 'الوجه', 'ضباء', 'تيماء', 'أملج', 'حقل', 'البدع', 'شرما']
        },
        'wajh': {
          name: 'الوجه',
          cities: ['الوجه', 'أملج', 'ضباء']
        },
        'duba': {
          name: 'ضباء',
          cities: ['ضباء', 'البدع', 'شرما']
        },
        'haql': {
          name: 'حقل',
          cities: ['حقل', 'البدع']
        }
      }
    },
    'northern-borders': {
      name: 'منطقة الحدود الشمالية',
      provinces: {
        'arar': {
          name: 'عرعر',
          cities: ['عرعر', 'رفحاء', 'طريف', 'العويقيلة']
        },
        'rafha': {
          name: 'رفحاء',
          cities: ['رفحاء', 'النعيرية']
        },
        'turaif': {
          name: 'طريف',
          cities: ['طريف', 'العويقيلة']
        }
      }
    },
    'jazan': {
      name: 'منطقة جازان',
      provinces: {
        'jazan-city': {
          name: 'جازان',
          cities: ['جازان', 'صبيا', 'أبو عريش', 'صامطة', 'الدرب', 'بيش', 'ضمد', 'الريث', 'أحد المسارحة', 'فرسان', 'العارضة', 'الطوال', 'هروب', 'الداير', 'العيدابي', 'فيفا']
        },
        'sabya': {
          name: 'صبيا',
          cities: ['صبيا', 'ضمد', 'الريث']
        },
        'abu-arish': {
          name: 'أبو عريش',
          cities: ['أبو عريش', 'صامطة', 'الدرب']
        },
        'bish': {
          name: 'بيش',
          cities: ['بيش', 'الداير', 'العيدابي']
        },
        'farasan': {
          name: 'فرسان',
          cities: ['فرسان', 'قماح']
        },
        'fifa': {
          name: 'فيفا',
          cities: ['فيفا', 'العارضة', 'الطوال']
        }
      }
    },
    'najran': {
      name: 'منطقة نجران',
      provinces: {
        'najran-city': {
          name: 'نجران',
          cities: ['نجران', 'شرورة', 'حبونا', 'ثار', 'خباش', 'يدمة', 'الوديعة']
        },
        'sharurah': {
          name: 'شرورة',
          cities: ['شرورة', 'الوديعة']
        }
      }
    },
    'bahah': {
      name: 'منطقة الباحة',
      provinces: {
        'bahah-city': {
          name: 'الباحة',
          cities: ['الباحة', 'بلجرشي', 'المندق', 'العقيق', 'قلوة', 'المخواة', 'غامد الزناد', 'القرى']
        },
        'baljurashi': {
          name: 'بلجرشي',
          cities: ['بلجرشي', 'المندق', 'العقيق']
        },
        'qilwah': {
          name: 'قلوة',
          cities: ['قلوة', 'المخواة']
        }
      }
    },
    'jouf': {
      name: 'منطقة الجوف',
      provinces: {
        'sakaka': {
          name: 'سكاكا',
          cities: ['سكاكا', 'القريات', 'دومة الجندل', 'طبرجل']
        },
        'qurayyat': {
          name: 'القريات',
          cities: ['القريات', 'العيساوية']
        },
        'dumat-al-jandal': {
          name: 'دومة الجندل',
          cities: ['دومة الجندل', 'طبرجل']
        }
      }
    }
  };

  const mockAnalysis = () => {
    setAnalysisStep(2);
    setTimeout(() => {
      setAnalysisResults({
        suitability: 'high',
        soilType: 'طينية رملية',
        waterAvailability: 'متوسطة',
        climate: 'صحراوي معتدل',
        recommendations: [
          'أشجار النخيل',
          'شجيرات الأراك',
          'نباتات الصبار',
          'الأشجار المقاومة للملوحة'
        ],
        priority: 'عالية',
        interventionType: 'تشجير مباشر مع تحسين التربة',
        images: {
          normal: '/api/placeholder/600/400',
          thermal: '/api/placeholder/600/400',
          vegetation: '/api/placeholder/600/400',
          future: '/api/placeholder/600/400'
        }
      });
      setAnalysisStep(3);
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
    setSelectedProvince('');
    setSelectedCity('');
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(e.target.value);
    setSelectedCity('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تحليل الأراضي الذكي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استخدم الذكاء الاصطناعي وصور الأقمار الصناعية لتحليل قابلية الأراضي للتشجير 
            والحصول على توصيات مخصصة لكل منطقة
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 space-x-reverse">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                analysisStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="mr-2 text-sm font-medium text-gray-700">تحديد المنطقة</span>
            </div>
            <div className={`w-16 h-0.5 ${analysisStep >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                analysisStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="mr-2 text-sm font-medium text-gray-700">التحليل</span>
            </div>
            <div className={`w-16 h-0.5 ${analysisStep >= 3 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                analysisStep >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="mr-2 text-sm font-medium text-gray-700">النتائج</span>
            </div>
          </div>
        </div>

        {/* Step 1: Area Selection */}
        {analysisStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                حدد المنطقة المراد تحليلها
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Map Interface */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">الخريطة التفاعلية</h3>
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-primary-300">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">انقر على الخريطة لتحديد المنطقة</p>
                      <p className="text-sm text-gray-500">أو ارسم منطقة مخصصة</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>المساحة المحددة: 0 هكتار</span>
                    <span>الإحداثيات: غير محددة</span>
                  </div>
                </div>

                {/* Options Panel */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">طرق التحديد</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="radio" name="selection" className="ml-3" />
                        <MapPin className="h-5 w-5 text-primary-600 ml-3" />
                        <div>
                          <p className="font-medium text-gray-900">تحديد نقطة</p>
                          <p className="text-sm text-gray-600">انقر على نقطة محددة في الخريطة</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="radio" name="selection" className="ml-3" />
                        <Target className="h-5 w-5 text-primary-600 ml-3" />
                        <div>
                          <p className="font-medium text-gray-900">رسم منطقة</p>
                          <p className="text-sm text-gray-600">ارسم حدود المنطقة المرغوبة</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input type="radio" name="selection" className="ml-3" />
                        <Upload className="h-5 w-5 text-primary-600 ml-3" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">رفع ملف KML/GeoJSON</p>
                          <p className="text-sm text-gray-600 mb-2">استيراد حدود من ملف</p>
                          <input
                            type="file"
                            accept=".kml,.geojson,.json"
                            onChange={handleFileUpload}
                            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                          />
                          {uploadedFile && (
                            <p className="text-sm text-green-600 mt-2">
                              تم رفع الملف: {uploadedFile.name}
                            </p>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات إضافية</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">اسم المنطقة</label>
                        <input 
                          type="text" 
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="أدخل اسم المنطقة"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">المنطقة</label>
                        <select 
                          value={selectedRegion}
                          onChange={handleRegionChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">اختر المنطقة</option>
                          {Object.entries(saudiRegions).map(([key, region]) => (
                            <option key={key} value={key}>{region.name}</option>
                          ))}
                        </select>
                      </div>

                      {selectedRegion && saudiRegions[selectedRegion] && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">المحافظة</label>
                          <select 
                            value={selectedProvince}
                            onChange={handleProvinceChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="">اختر المحافظة</option>
                            {Object.entries(saudiRegions[selectedRegion].provinces).map(([key, province]) => (
                              <option key={key} value={key}>{province.name}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      {selectedProvince && saudiRegions[selectedRegion]?.provinces[selectedProvince] && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
                          <select 
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          >
                            <option value="">اختر المدينة</option>
                            {saudiRegions[selectedRegion].provinces[selectedProvince].cities.map((city: string) => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">الغرض من التحليل</label>
                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option>تشجير جديد</option>
                          <option>مراقبة التدهور</option>
                          <option>تقييم إعادة التأهيل</option>
                          <option>دراسة أولية</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={mockAnalysis}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Brain className="h-5 w-5 ml-2" />
                    ابدأ التحليل الذكي
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Analysis in Progress */}
        {analysisStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="animate-spin w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">جاري تحليل المنطقة...</h2>
              <p className="text-gray-600 mb-8">
                نقوم بمعالجة صور الأقمار الصناعية وتطبيق نماذج الذكاء الاصطناعي لتحليل خصائص التربة والغطاء النباتي
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center text-primary-600">
                  <Satellite className="h-5 w-5 ml-2" />
                  <span className="text-sm">معالجة صور الأقمار الصناعية...</span>
                </div>
                <div className="flex items-center justify-center text-primary-600">
                  <Brain className="h-5 w-5 ml-2" />
                  <span className="text-sm">تطبيق نماذج الذكاء الاصطناعي...</span>
                </div>
                <div className="flex items-center justify-center text-primary-600">
                  <Eye className="h-5 w-5 ml-2" />
                  <span className="text-sm">تحليل خصائص التربة والمناخ...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {analysisStep === 3 && analysisResults && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">تم التحليل بنجاح</h2>
                <p className="text-gray-600">النتائج التفصيلية لتحليل الأرض المحددة</p>
              </div>

              {/* Satellite Images Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">صور الأقمار الصناعية والتحليل البصري</h3>
                
                {/* Image Type Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <button
                    onClick={() => setSelectedImageView('normal')}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedImageView === 'normal'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Camera className="h-4 w-4 ml-2" />
                    الصورة العادية
                  </button>
                  <button
                    onClick={() => setSelectedImageView('thermal')}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedImageView === 'thermal'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Thermometer className="h-4 w-4 ml-2" />
                    الصورة الحرارية
                  </button>
                  <button
                    onClick={() => setSelectedImageView('vegetation')}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedImageView === 'vegetation'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Leaf className="h-4 w-4 ml-2" />
                    الأراضي الخضراء
                  </button>
                  <button
                    onClick={() => setSelectedImageView('future')}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedImageView === 'future'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <TreePine className="h-4 w-4 ml-2" />
                    التوقع المستقبلي
                  </button>
                </div>

                {/* Main Image Display */}
                <div className="bg-gray-100 rounded-xl overflow-hidden mb-4">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                    {selectedImageView === 'normal' && (
                      <div className="text-center">
                        <Image className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">الصورة العادية للأرض</p>
                        <p className="text-sm text-gray-500 mt-2">صورة عالية الدقة من القمر الصناعي</p>
                      </div>
                    )}
                    {selectedImageView === 'thermal' && (
                      <div className="text-center">
                        <Thermometer className="h-16 w-16 text-red-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">الصورة الحرارية</p>
                        <p className="text-sm text-gray-500 mt-2">تحليل درجات الحرارة والرطوبة</p>
                        <div className="flex justify-center mt-4 space-x-4 space-x-reverse">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">مناطق باردة</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">مناطق معتدلة</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-red-500 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">مناطق حارة</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedImageView === 'vegetation' && (
                      <div className="text-center">
                        <Leaf className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">خريطة الأراضي الخضراء</p>
                        <p className="text-sm text-gray-500 mt-2">تحديد المناطق ذات الغطاء النباتي</p>
                        <div className="flex justify-center mt-4 space-x-4 space-x-reverse">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-600 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">غطاء نباتي كثيف</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-400 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">غطاء نباتي متوسط</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-600 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">غطاء نباتي قليل</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-400 rounded ml-2"></div>
                            <span className="text-xs text-gray-600">لا يوجد غطاء نباتي</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedImageView === 'future' && (
                      <div className="text-center">
                        <TreePine className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">التوقع بعد التشجير</p>
                        <p className="text-sm text-gray-500 mt-2">محاكاة الأرض بعد 5 سنوات من التشجير والاعتناء</p>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-xs">
                          <div className="bg-white bg-opacity-80 p-2 rounded">
                            <p className="font-medium text-green-700">تحسن متوقع: 85%</p>
                          </div>
                          <div className="bg-white bg-opacity-80 p-2 rounded">
                            <p className="font-medium text-blue-700">غطاء نباتي: 70%</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Analysis Info */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Camera className="h-5 w-5 text-blue-600 ml-2" />
                      <span className="font-medium text-blue-900">الصورة العادية</span>
                    </div>
                    <p className="text-sm text-blue-700">دقة: 10م/بكسل</p>
                    <p className="text-sm text-blue-700">تاريخ الالتقاط: 2024-01-15</p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Thermometer className="h-5 w-5 text-red-600 ml-2" />
                      <span className="font-medium text-red-900">التحليل الحراري</span>
                    </div>
                    <p className="text-sm text-red-700">متوسط الحرارة: 28°س</p>
                    <p className="text-sm text-red-700">مستوى الرطوبة: 45%</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Leaf className="h-5 w-5 text-green-600 ml-2" />
                      <span className="font-medium text-green-900">الغطاء النباتي</span>
                    </div>
                    <p className="text-sm text-green-700">التغطية الحالية: 15%</p>
                    <p className="text-sm text-green-700">صحة النباتات: متوسطة</p>
                  </div>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TreePine className="h-5 w-5 text-primary-600 ml-2" />
                      <span className="font-medium text-primary-900">التوقع المستقبلي</span>
                    </div>
                    <p className="text-sm text-primary-700">إمكانية التحسن: عالية</p>
                    <p className="text-sm text-primary-700">فترة التطوير: 3-5 سنوات</p>
                  </div>
                </div>

                {/* Download Options */}
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Download className="h-4 w-4 ml-2" />
                    تحميل جميع الصور
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <FileText className="h-4 w-4 ml-2" />
                    تحميل التقرير التفصيلي
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <Printer className="h-4 w-4 ml-2" />
                    طباعة النتائج
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Suitability Score */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 ml-2" />
                    <h3 className="font-semibold text-green-900">قابلية التشجير</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                    <p className="text-green-700 font-medium">عالية الجودة</p>
                  </div>
                </div>

                {/* Priority Level */}
                <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-secondary-600 ml-2" />
                    <h3 className="font-semibold text-secondary-900">الأولوية</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary-600 mb-2">عالية</div>
                    <p className="text-secondary-700 text-sm">يُنصح بالتدخل السريع</p>
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-orange-600 ml-2" />
                    <h3 className="font-semibold text-orange-900">مستوى المخاطر</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">متوسط</div>
                    <p className="text-orange-700 text-sm">مراقبة دورية مطلوبة</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Environmental Analysis */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">التحليل البيئي</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-earth-50 border border-earth-200 rounded-lg">
                      <div className="bg-earth-600 p-2 rounded-lg ml-4">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">نوع التربة</p>
                        <p className="text-earth-700">{analysisResults.soilType}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="bg-blue-600 p-2 rounded-lg ml-4">
                        <Droplets className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">توفر المياه</p>
                        <p className="text-blue-700">{analysisResults.waterAvailability}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="bg-orange-600 p-2 rounded-lg ml-4">
                        <Thermometer className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">المناخ</p>
                        <p className="text-orange-700">{analysisResults.climate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">التوصيات</h3>
                  
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-900 mb-4">النباتات المناسبة</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {analysisResults.recommendations.map((plant: string, index: number) => (
                        <div key={index} className="flex items-center bg-white p-3 rounded-lg">
                          <Leaf className="h-4 w-4 text-green-600 ml-2" />
                          <span className="text-sm font-medium text-gray-900">{plant}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">نوع التدخل المقترح</h4>
                    <p className="text-secondary-800">{analysisResults.interventionType}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-gray-200">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                  <Target className="h-5 w-5 ml-2" />
                  ابدأ حملة تشجير
                </button>
                <Link 
                  to="/report/analysis/1"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 flex items-center justify-center"
                >
                  <FileText className="h-5 w-5 ml-2" />
                  عرض التقرير
                </Link>
                <button 
                  onClick={() => {setAnalysisStep(1); setAnalysisResults(null);}}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  تحليل منطقة أخرى
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisPage;