@Service
public class AreaService {
    private final AreaRepository areaRepository;

    @Autowired
    public AreaService(AreaRepository areaRepo) {
        this.areaRepository = areaRepo;
    }

    public Area[] getAllAreas {
        return areaRepository.findAllAreas();
    }
}